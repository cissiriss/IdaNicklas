import { SongSuggestion } from "./SongSuggestion";

interface RsvpModalProps {
  isSubmitted: boolean;
  atLeastOneGuestAttendingWedding: boolean;
}

export default function RsvpModal({
  isSubmitted,
  atLeastOneGuestAttendingWedding,
}: RsvpModalProps) {
  console.log(isSubmitted, atLeastOneGuestAttendingWedding);
  return (
    <dialog id="my_modal_1" open={isSubmitted} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Tack för ditt svar!</h3>
        <p className="p-4">
          Du kommer att få ett bekräftelsemail till din angivna mail. Vi hoppas
          vi ses vid bröloppshelgen!
        </p>

        {atLeastOneGuestAttendingWedding && (
          <div className="flex flex-col items-center">
            <SongSuggestion />
          </div>
        )}

        <div className="modal-action">
          <form method="dialog">
            <button className="btn bg-blue text-light hover:bg-darkblue">
              Stäng
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
