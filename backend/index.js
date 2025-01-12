const { Client } = require("pg"),
  express = require("express"),
  cors = require("cors"),
  dotenv = require("dotenv"),
  nodemailer = require("nodemailer"),
  path = require("path");

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

const { formSchema } = require("../frontend/src/types/schemas");
const { saveRsvp } = require("./submit.service");

client.connect();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/api", async (_, response) => {
  const { rows } = await client.query(
    "SELECT * FROM RSVPs WHERE attending_wedding = $1",
    [true],
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
  try {
    const dbResult = saveRsvp(guests);
  } catch {
    return res.status(500).json({ message: "Failed to save data" });
  }

  // Send a confirmation email
  try {
    const emails = guests.map((guest) => guest.email);
    await sendEmails(emails);
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
