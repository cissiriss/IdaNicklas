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
  const [guests, setGuests] = useState<Guest[]>([]);

  const getGuests = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/rsvp", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const guests = await response.json();
        setGuests(guests);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGuests();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="flex flex-col table table-xs table-pin-rows table-pin-cols">
        <thead className="text-xl">
          <tr>
            <th>Sällskap</th>
            <th>Namn</th>
            <th>Bröllopet</th>
            <th>Fredagen</th>
            <th>Specialkost</th>
            <th>Email</th>
            <th>Övrigt</th>
          </tr>
        </thead>
        {guests &&
          guests.map((guest) => (
            <>
              <tbody>
                <tr>
                  <td className="text-lg">{guest.party}</td>
                  <td className="text-lg">{guest.namn}</td>
                  <td className="text-lg">{guest.attendingWedding}</td>
                  <td className="text-lg">{guest.attendingDinner}</td>
                  <td className="text-lg">{guest.specialFood}</td>
                  <td className="text-lg">{guest.email}</td>
                  <td className="text-lg">{guest.other}</td>
                </tr>
              </tbody>
            </>
          ))}
      </table>
    </div>
  );
}
