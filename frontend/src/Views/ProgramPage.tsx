import bild5 from "../assets/Bild5.jpg";
import bild4 from "../assets/Bild4.jpg";
import { Image } from "../components/Image";
import {
  CeremonyMarkup,
  DinnerMarkup,
  DressCodeMarkup,
  FridayMarkup,
  PlaceMarkup,
  SpeachMarkup,
} from "../assets/Texts";

export default function ProgramPage() {
  return (
    <>
      <div className="flex flex-col sm:justify-center sm:text-center font-alumni font-light p-4">
        <h1 className="font-windsong text-5xl mb-8">Program</h1>
        <div id="friday">
          <div className="flex flex-col sm:justify-center mb-8">
            <FridayMarkup />
            <Image imageSource={bild4} altText="couple" />
          </div>
        </div>
        <div id="location" className="flex flex-col sm:justify-center">
          <PlaceMarkup />
          <Image imageSource={bild5} altText="couple" />
        </div>
        <CeremonyMarkup />
        <div id="party">
          <DinnerMarkup />
        </div>
        <SpeachMarkup />
      </div>
      <div id="dresscode" className="font-alumni font-light p-4 text-xl">
        <DressCodeMarkup />
      </div>
    </>
  );
}
