const dotenv = require("dotenv"),
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
