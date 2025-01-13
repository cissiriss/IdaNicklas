export function SongSuggestion() {
  return (
    <div>
      <h3 className="font-windsong font-medium text-3xl">Partylåt!</h3>
      <p>Skicka ditt festligaste låtförslag till brudparet! </p>
      <input
        type="text"
        placeholder="Låtförslag"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}
