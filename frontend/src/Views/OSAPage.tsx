import { useState } from "react";
import OsaForm from "../components/OsaForm";
import { GetConfirmedGuests } from "../components/GetConfirmedGuests";
type Guest = {
  nr: number;
};

export const OSAPage = () => {
  const guestnr: Guest[] = [{ nr: 1 }, { nr: 2 }, { nr: 3 }];
  const [nrOfGuests, setNumberOfGuests] = useState<number>(0);

  const handleGuestSelection = (numberOfGuests: number) => {
    setNumberOfGuests(numberOfGuests);
  };

  return (
    <>
      <div className="button-container">
        {guestnr.map((guest) => (
          <input
            className="Osa-button"
            type="button"
            key={guest.nr}
            value={guest.nr}
            onClick={() => handleGuestSelection(guest.nr)}
          />
        ))}
      </div>
      {Array.from({ length: nrOfGuests }, (_, index) => (
        <div key={index} className="osa-form">
          <p key={index}>Person {index + 1}</p>
          <OsaForm />
        </div>
      ))}
      <div>
        <GetConfirmedGuests />
      </div>
    </>
  );
};
