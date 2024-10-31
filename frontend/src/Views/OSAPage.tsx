import { useState } from "react";
import OsaForm from "../components/OsaForm";
import { GetConfirmedGuests } from "../components/GetConfirmedGuests";
import MailTest from "../components/MailTest";
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
      <div className="osa-container">
        <h4>OSA i formuläret nedan senast 23/2</h4>
        <h5>Välj antalet personer som du vill lämna svar för</h5>
      </div>
      <div className="button-container">
        {guestnr.map((guest) => (
          <input
            className="osa-button"
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
        <MailTest />
      </div>
    </>
  );
};
