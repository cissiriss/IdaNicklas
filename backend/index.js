import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import * as dotenv from "dotenv";
import path from "path";
import pkg from "pg";
import { z } from "zod";

const guestSchema = z.object({
  name: z.string().min(1, { message: "Du har inte fyllt i namn" }),
  lastName: z.string().min(1, { message: "Du har inte fyllt i efternamn" }),
  email: z
    .string()
    .email({ message: "Fyll i en giltig e-mail" })
    .min(1, { message: "Fyll i en giltig e-mail" }),
  attendingWedding: z
    .enum(["true", "false"], {
      message: "Du måste välja något.. ",
    })
    .default("true"),
  attendingDinner: z
    .enum(["true", "false"], {
      message: "Du måste välja något.. ",
    })
    .default("true"),
  specialFood: z.string().optional(),
  misc: z.string().optional(),
});

const formSchema = z.object({
  guests: z.array(guestSchema),
});

const { Client } = pkg;

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

const app = express();

app.use(express.json());

app.use(cors());

async function sendEmails(emails) {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
  // Looping through all emails that were registered
  const emailPromises = emails.map((email) => {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Bekräftelsemail",
      html: `<h1>Hej!</h1><p>Tack för din anmälan. Vi bekräftar härmed din registrering.</p>`,
    };
    transporter.sendMail(mailOptions);
  });

  // Prosime.all to wait for all emails to be sent
  return await Promise.all(emailPromises);
}

async function saveRsvp(guests) {
  // Example query to instet data into the database
  // Do the correct one
  await client.query(
    "INSERT INTO RSVPs (attending_wedding, guests) VALUES ($1, $2)",
    [true, guests]
  );
}

app.get("/api", async (_, response) => {
  const { rows } = await client.query(
    "SELECT * FROM RSVPs WHERE attending_wedding = $1",
    [true]
  );
  response.send(rows);
});

app.post("/api/submit", async (req, res) => {
  // Validate the request body using safeParse
  const result = formSchema.safeParse(req.body);

  if (!result.success) {
    // Handle validation errors
    return res.status(400).json({ errors: result.error.errors });
  }

  // Destructure the validated data
  const { guests } = result.data;

  // Insert the data into the database
  // try {
  //   const dbResult = saveRsvp(client, guests);
  // } catch {
  //   return res.status(500).json({ message: "Failed to save data" });
  // }

  // Send a confirmation email
  try {
    const emails = guests.map((guest) => guest.email);

    const emailResult = await sendEmails(emails);
    return res.status(200).json({ message: "Data saved successfully}" });
  } catch {
    return res.status(500).json({ message: "Failed to send email" });
  }
});

// app.post("/api/submit", (req, res) => {
//   const inputData = req.body;

//   console.log("Received data:", inputData); // Log the received data instead of saving it to the database
//   res.status(200).json({ message: "Data received successfully" });
// });

app.use(express.static(path.join(path.resolve(), "dist")));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
