const dotenv = require("dotenv"),
  nodemailer = require("nodemailer"),
  path = require("path");

const express = require("express"),
  { Client } = require("pg");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // App-lösenordet från Gmail
  },
});

// Endpoint för att skicka bekräftelsemail baserat på e-postadress
app.post("/api/sendconfirmation", async (req, res) => {
  const { email } = req.body; // Läs e-post från body:n
  console.log(req, res);
  if (!email) {
    return res.status(400).send("E-postadress saknas");
  }

  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Bekräftelsemail",
      html: `<h1>Hej!</h1><p>Tack för din anmälan. Vi bekräftar härmed din registrering.</p>`,
    };

    // Skicka mailet
    await transporter.sendMail(mailOptions);

    res.status(200).send("Bekräftelsemail har skickats");
  } catch (error) {
    console.error("Fel vid skickande av mail:", error);
    res.status(500).send("Det gick inte att skicka bekräftelsemailet");
  }
});

app.get("/api", async (_, response) => {
  const { rows } = await client.query(
    "SELECT * FROM RSVPs WHERE attending_wedding = $1",
    [true]
  );
  response.send(rows);
});

app.post("/api/submit", (req, res) => {
  const test = req.body;
  console.log("Received data:", test); // Log the received data instead of saving it to the database
  res.status(200).json({ message: "Data received successfully" });
});

app.use(express.static(path.join(path.resolve(), "dist")));

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
