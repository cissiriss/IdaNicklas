import bild3 from "../assets/Bild3.jpg";

export default function HotelPage() {
  return (
    <div>
      <p>
        Som du redan vet finns det ett hotell i direkt anslutning till festen.
        Vår bröllopshelg är inte längre reserverad för enbart våra gäster. Om du
        inte har bokat men skulle vilja göra det görs det via denna länk:
        www.gibsonshotell.se/boka För kännedom: det finns 27 rum på hotellet, av
        blandad storlek. Det innebär att om du önskar en specifik rumstyp bör du
        boka skyndsamt! Brudparet bor på hotellet fredag till söndag. Om du
        också kommer bo på hotellet ser vi fram emot att ses vid frukostbuffén.
      </p>
      <img src={bild3} alt="" />
    </div>
  );
}
