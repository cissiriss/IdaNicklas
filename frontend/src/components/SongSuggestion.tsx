export function SongSuggestion() {
  return (
    <div id="song-suggestions" className="flex flex-col sm:self-center">
      <p>Skicka ditt festligaste låtförslag till brudparet! </p>
      <p className="font-medium">Skicka som spotifylänk</p>
      <input
        type="text"
        placeholder="Låtförslag"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}
