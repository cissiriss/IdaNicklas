export async function saveRsvp(guests) {
  // Example query to instet data into the database
  // Do the correct one
  await client.query(
    "INSERT INTO RSVPs (attending_wedding, guests) VALUES ($1, $2)",
    [true, guests],
  );
}
