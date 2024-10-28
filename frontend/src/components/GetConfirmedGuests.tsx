import { useEffect, useState } from "react";

export const GetConfirmedGuests = () => {
  const [confirmedGuests, setConfirmedGuests] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/guests";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setConfirmedGuests(data));
    console.log("hej");
  }, []);

  return (
    <>
      <div>Hur många gäster kommer? </div>
      <div>{confirmedGuests.length}</div>
    </>
  );
};
