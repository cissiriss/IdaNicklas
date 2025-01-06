import { MapComponent } from "../components/Map";

export default function Directions() {
  return (
    <div>
      <p>
        Vigseln kommer att vara i Jonsereds trädgårdar och middagen/festen är i
        fabriksstråket Jonsered. Bil: Vi rekommenderar att parkera bilen vid
        Jonsereds fabriker för att sedan promenera till Jonsereds trädgårdar.
        Efter vigseln kommer alla gäster gemensamt promenera till festlokalen.
        <br />
        Kollektivtrafik: Det tar 12 minuter från Göteborg central till Jonsered
        station med tåget. Sedan är det ca 900m promenad till vigseln och ca
        400m från festlokalen.
        <br />
        Taxi: Adress till vigseln: William Gibsons väg 76, 433 76 Jonsered{" "}
        <br />
        Adress till festlokalen: Fabriksstråket 36 & 40, 433 76 Jonsered
      </p>
      <MapComponent />
    </div>
  );
}
