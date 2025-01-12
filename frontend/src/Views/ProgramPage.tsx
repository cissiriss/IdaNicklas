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
import { SectionContainer } from "../components/SectionContainer";
import { DressCodeContainer } from "../components/DresscodeContainer";

export default function ProgramPage() {
  return (
    <>
      <div className="flex flex-col sm:justify-center sm:text-center font-alumni font-light p-4">
        <h1 className="font-windsong text-5xl">Program</h1>
        <SectionContainer>
          <FridayMarkup />
          <Image imageSource={bild4} altText="couple" />
        </SectionContainer>
        <SectionContainer>
          <PlaceMarkup />
          <Image imageSource={bild5} altText="couple" />
        </SectionContainer>
        <SectionContainer>
          <CeremonyMarkup />
        </SectionContainer>
        <SectionContainer>
          <DinnerMarkup />
        </SectionContainer>
        <SectionContainer>
          <SpeachMarkup />
        </SectionContainer>
      </div>
      <DressCodeContainer>
        <DressCodeMarkup />
      </DressCodeContainer>
    </>
  );
}
