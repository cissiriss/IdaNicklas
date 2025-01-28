import { useEffect, useState } from "react";

interface Guest {
  party: number;
  namn: string;
  email: string;
  attendingWedding: boolean;
  attendingDinner: boolean;
  specialFood: string;
  other: string;
}

export default function AdminPage() {
  const [guests, setGuests] = useState<Guest[]>();

  const getGuests = async () => {
    try {
      const response = await fetch("/api/rsvp");
      const guests = await response.json();
      setGuests(guests);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGuests();
  }, []);

  console.log(guests?.forEach((guest) => console.log(guest)));

  return (
    <div className="overflow-x-auto">
      <table className="flex flex-col  table table-xs table-pin-rows table-pin-cols">
        {guests &&
          guests.map((guest) => (
            <>
              <thead>
                <tr>
                  <th>Sällskap</th>
                  <th>Namn</th>
                  <th>Bröllopet</th>
                  <th>Fredagen</th>
                  <th>Specialkost</th>
                  <th>Övrigt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{guest.party}</td>
                  <td>{guest.namn}</td>
                  <td>{guest.attendingWedding}</td>
                  <td>{guest.attendingDinner}</td>
                  <td>{guest.specialFood}</td>
                  <td>{guest.other}</td>
                </tr>
              </tbody>
            </>
          ))}
      </table>
    </div>
  );
}
