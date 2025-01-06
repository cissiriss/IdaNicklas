import bild2 from "../assets/bild2.jpg";
import Directions from "./Directions";
import HotelPage from "./HotelPage";
import { OSAPage } from "./OSAPage";

export const WeddingPage = () => {
  return (
    <>
      <div id="wedding">
        <h1>Bröllopet</h1>
        <img src={bild2} alt="couple by the lake" />
        <div id="osa">
          <h2>OSA</h2>
          <p>
            OSA i formuläret nedan. Vi vill ha ditt svar oavsett om du kan komma
            eller inte. När du fyller i formuläret kommer flera alternativ att
            komma efterhand. Ge svar om din medverkan senast 1/3-2025.
          </p>
          <OSAPage />
        </div>
        <div id="hotel">
          <h2>Hotell</h2>
          <HotelPage />
        </div>
        <div id="directions">
          <h2>Hitta hit</h2>
          <Directions />
        </div>
      </div>
    </>
  );
};
