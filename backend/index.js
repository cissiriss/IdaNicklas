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

client.connect();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/api", async (_, response) => {
  const { rows } = await client.query(
    "SELECT * FROM RSVPs WHERE attending_wedding = $1",
    [true]
  );
  response.send(rows);
});

app.post("/api/mail", async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

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

    await transporter.sendMail(mailOptions);

    res.status(200).send("Bekräftelsemail har skickats");
  } catch (error) {
    console.error("Fel vid skickande av mail:", error);
    res.status(500).send("Det gick inte att skicka bekräftelsemailet");
  } finally {
    const { inputData } = req.body;

    const { rows } = await client.query(
      "INSERT INTO RSVPs (name, last_name, email, attending_wedding, attending_dinner, special_food, misc) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        inputData.name,
        inputData.lastName,
        inputData.email,
        inputData.attendingWedding,
        inputData.attendingDinner,
        inputData.specialFood,
        inputData.misc,
      ]
    );
    response.send(rows);
  }
});

app.use(express.static(path.join(path.resolve(), "dist")));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
