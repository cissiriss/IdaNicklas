import bild2 from "../assets/Bild2.jpg";
import { Image } from "../components/Image";
import Directions from "./Directions";
import HotelPage from "./HotelPage";
import { OSAPage } from "./OSAPage";

export const WeddingPage = () => {
  return (
    <>
      <div
        className="flex flex-col w-full sm:text-center sm:justify-center font-alumni font-light text-darkblue text-xl p-4"
        id="wedding"
      >
        <h1 className="font-windsong text-5xl sm:ml-8 text-center mb-8">
          Bröllopet
        </h1>
        <Image imageSource={bild2} altText="couple by the lake" />
        <div id="osa" className="mb-8">
          <h2 className="font-windsong text-3xl mb-2">OSA</h2>
          <p>
            OSA i formuläret nedan. Vi vill ha ditt svar oavsett om du kan komma
            eller inte. När du fyller i formuläret kommer flera alternativ att
            komma efterhand. Ge svar om din medverkan senast 1/3-2025.
          </p>
          <OSAPage />
        </div>
        <div id="hotel" className="flex flex-col mb-8">
          <h2 className="font-windsong text-3xl mb-2">Hotell</h2>
          <HotelPage />
        </div>
        <div id="directions" className="mb-8">
          <h2 className="font-windsong text-3xl mb-2 ">Hitta hit</h2>
          <Directions />
        </div>
        <div className="flex flex-col mb-8" id="gifts">
          <h2 className="font-windsong font-medium text-3xl mb-8">Gåvor</h2>
          <p className="text-xl font-light">
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
