import bild2 from "../assets/Bild2.jpg";
import bild3 from "../assets/Bild3.jpg";
import { DirectionsMarkup, GiftMarkup, OSAMarkup } from "../assets/Texts";
import { Image } from "../components/Image";
import { OSAPage } from "./OSAPage";

import { HotelMarkup } from "../assets/Texts";
import { MapComponent } from "../components/Map";
export const WeddingPage = () => {
  return (
    <div
      className="flex flex-col w-full sm:text-center sm:justify-center font-alumni font-light text-darkblue text-xl p-4"
      id="wedding"
    >
      <h1 className="font-windsong text-5xl sm:ml-8 text-center mb-8">
        Bröllopet
      </h1>
      <Image imageSource={bild2} altText="couple by the lake" />
      <div id="osa" className="mb-8">
        <OSAMarkup />
        <OSAPage />
      </div>
      <div id="hotel" className="flex flex-col mb-8">
        <h2 className="font-windsong text-3xl mb-2">Hotell</h2>
        <div className="flex flex-col w-full">
          <HotelMarkup />
          <Image imageSource={bild3} altText="hotel" />
        </div>
      </div>
      <div id="directions" className="mb-8">
        <h2 className="font-windsong text-3xl mb-2 ">Hitta hit</h2>

        <div className="flex flex-col font-alumni">
          <DirectionsMarkup />
          <MapComponent />
        </div>
      </div>
      <div className="flex flex-col mb-8" id="gifts">
        <GiftMarkup />
      </div>
    </div>
  );
};
