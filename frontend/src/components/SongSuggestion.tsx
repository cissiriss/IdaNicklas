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
        <p className="font-medium mb-2">Skicka helst som spotifylänk</p>
        <input
          {...register("song")}
          type="text"
          placeholder="Låtförslag"
          className="input input-bordered w-full max-w-xs"
        />
        <button
          type="submit"
          className="btn w-1/2 bg-blue mt-4 hover:bg-darkblue text-light font-alumnip text-lg"
        >
          Skicka
        </button>
      </div>
    </form>
  );
}
