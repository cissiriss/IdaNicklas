import { useForm } from "react-hook-form";

interface SongSuggestion {
  song: string;
}

export function SongSuggestion() {
  const { handleSubmit, register } = useForm<SongSuggestion>();
  const onSubmit = (data: SongSuggestion) => {
    try {
      fetch("/api/song", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        id="song-suggestions"
        className="flex flex-col sm:self-center items-center"
      >
        <p>Skicka ditt festligaste låtförslag till brudparet! </p>
        <p className="font-medium">Skicka som spotifylänk</p>
        <input
          {...register("song")}
          type="text"
          placeholder="Låtförslag"
          className="input input-bordered w-full max-w-xs"
        />
        <button
          type="submit"
          className="btn w-full bg-blue hover:bg-darkblue max-w-xs text-light font-alumnip text-lg"
        >
          Skicka
        </button>
      </div>
    </form>
  );
}
