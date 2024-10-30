import { MapComponent } from "../components/Map";
export const InfoPage = () => {
  return (
    <>
      <h3>Bra att veta</h3>
      <div>
        <p>
          På fredagen kommer vi att äta middag på Poppels bryggeri (som också
          ligger 50 meter från hotellet) och om du vill får du gärna göra oss
          sällskap där! Detta innebär att du som gäst har möjlighet att, precis
          som vi, fira i dagarna tre (om man räknar med hotellfrukosten på
          söndagen dvs). 🥂 Samtliga rum på hotellet är just nu låsta för enbart
          våra bröllopsgäster. Vid årsskiftet kommer dessa att släppas för
          allmänheten. Det innebär att om du är intresserad av att bo på
          hotellet rekommenderar vi dig att boka ditt rum senast 31/12, efter
          det datumet är det ingen garanti att det finns lediga rum kvar.
        </p>
        <p>
          Om du är intresserad av att boka hotell till vår bröllopshelg behöver
          du göra följande:
        </p>
        <p>1. www.gibsonshotell.se/boka</p>
        <p>2. Skriv in koden IDANICKLAS tryck tillämpa</p>
        <p>3. Välj datum, antal gäster, sök</p>
        <p>4. Välj rumstyp och boka</p>

        <p>
          För kännedom: det finns 27 rum på hotellet, av blandad storlek. Det
          innebär att om du önskar en specifik rumstyp bör du boka skyndsamt!
        </p>
      </div>
      <MapComponent />
      <h3>Hitta hit</h3>
      <p> Hitta hit Bil: Med GPS</p>
      <p>
        Tåg: Tåg från Göteborgs central till Jonsereds station. 15 minuters
        promenad till kyrkan.
      </p>
      <p>
        Buss: Närmsta hållplats: Jons väg. Fem minuters promenad till kyrkan.
      </p>
      <p>Både buss- och tågbiljett köper du enkelt i Västtrafiks app ToGo.</p>
    </>
  );
};
