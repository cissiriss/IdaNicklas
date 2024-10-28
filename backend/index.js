const dotenv = require("dotenv"),
  path = require("path");

const express = require("express"),
  { Client } = require("pg");

const cors = require("cors");

const app = express();

app.use(cors());

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

app.post("/api/submit", async (request, response) => {
  console.log(request);
});

app.use(express.static(path.join(path.resolve(), "dist")));

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
