import { useEffect, useState } from "react";

export const GetConfirmedGuests = () => {
  const [confirmedGuests, setConfirmedGuests] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setConfirmedGuests(data));
    console.log("hej");
  }, []);

  return (
    <>
      <div>Hur många gäster har svarat ja?</div>
      <div>{confirmedGuests.length}</div>
    </>
  );
};
