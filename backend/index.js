const dotenv = require("dotenv"),
  path = require("path");

const express = require("express"),
  { Client } = require("pg");

const app = express();

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.get("/guests", async (request, response) => {
  const { rows } = await client.query("SELECT * FROM guests");

  response.send(rows);
});

app.use(express.static(path.join(path.resolve(), "dist")));

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
