import bild2 from "../assets/Bild2.jpg";
import bild3 from "../assets/Bild3.jpg";
import { DirectionsMarkup, GiftMarkup, OSAMarkup } from "../assets/Texts";
import { Image } from "../components/Image";
import { OSAPage } from "./OSAPage";

import { HotelMarkup } from "../assets/Texts";
import { MapComponent } from "../components/Map";
import { SectionContainer } from "../components/SectionContainer";
export const WeddingPage = () => {
  return (
    <div className="flex flex-col w-full sm:text-center sm:justify-center font-alumni font-light text-darkblue text-xl p-4">
      <h1 id="wedding" className="font-windsong text-5xl sm:ml-8 text-center">
        Bröllopet
      </h1>
      <Image imageSource={bild2} altText="couple by the lake" />
      <SectionContainer>
        <OSAMarkup />
        <OSAPage />
      </SectionContainer>
      <SectionContainer>
        <HotelMarkup />
        <Image imageSource={bild3} altText="hotel" />
      </SectionContainer>
      <SectionContainer>
        <DirectionsMarkup />
        <MapComponent />
      </SectionContainer>
      <SectionContainer>
        <GiftMarkup />
      </SectionContainer>
    </div>
  );
};
