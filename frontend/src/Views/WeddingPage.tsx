import bild2 from "../assets/Bild2.jpg";
import Directions from "./Directions";
import HotelPage from "./HotelPage";
import { OSAPage } from "./OSAPage";

export const WeddingPage = () => {
  return (
    <>
      <div
        className="flex flex-col font-alumni text-darkblue text-lg p-4"
        id="wedding"
      >
        <h1 className="font-windsong text-4xl sm:ml-8">Bröllopet</h1>
        <img
          className="m-4 rounded sm:w-2/3 sm:ml-8"
          src={bild2}
          alt="couple by the lake"
        />
        <div id="osa">
          <h2 className="font-windsong text-2xl mt-2">OSA</h2>
          <p>
            OSA i formuläret nedan. Vi vill ha ditt svar oavsett om du kan komma
            eller inte. När du fyller i formuläret kommer flera alternativ att
            komma efterhand. Ge svar om din medverkan senast 1/3-2025.
          </p>
          <OSAPage />
        </div>
        <div id="hotel" className="flex flex-col max-w-2xl mb-8">
          <h2 className="font-windsong text-2xl mt-4">Hotell</h2>
          <HotelPage />
        </div>
        <div id="directions">
          <h2 className="font-windsong text-2xl mt-4">Hitta hit</h2>
          <Directions />
        </div>
        <div className="flex flex-col max-w-2xl mt-8" id="gifts">
          <h2 className="font-windsong text-2xl mb-4">Gåvor</h2>
          <p>
            Om ni vill ge oss bröllopspresent tar vi tacksamt emot bidrag till
            vårt framtida husköp.
            <br />
            Swisha i så fall till vår toastmaster Daniel Renhage +4560595883
            (danskt telefonnummer)
          </p>
        </div>
      </div>
    </>
  );
};
