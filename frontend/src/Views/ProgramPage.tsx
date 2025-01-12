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
import { Heading } from "../components/Heading";
import { HeadingEnum } from "../types/enums";

export default function ProgramPage() {
  return (
    <>
      <Heading id="program" type={HeadingEnum.section}>
        Program
      </Heading>
      <SectionContainer>
        <Heading type={HeadingEnum.subSection} id="friday">
          Uppladdning Fredag
        </Heading>
        <FridayMarkup />
        <Image imageSource={bild4} altText="couple" />
      </SectionContainer>
      <SectionContainer>
        <Heading type={HeadingEnum.subSection} id="location">
          Om området
        </Heading>
        <PlaceMarkup />
        <Image imageSource={bild5} altText="couple" />
      </SectionContainer>
      <SectionContainer>
        <Heading type={HeadingEnum.subSection} id="wedding-ceremony">
          Vigsel i Jonsered
        </Heading>
        <CeremonyMarkup />
      </SectionContainer>
      <SectionContainer>
        <Heading type={HeadingEnum.subSection} id="party">
          Middag och Fest
        </Heading>
        <DinnerMarkup />
      </SectionContainer>
      <SectionContainer>
        <Heading type={HeadingEnum.subSection} id="speaches">
          Tal
        </Heading>
        <SpeachMarkup />
      </SectionContainer>
      <DressCodeContainer>
        <Heading type={HeadingEnum.subSection} id="dresscode">
          Klädkod
        </Heading>
        <DressCodeMarkup />
      </DressCodeContainer>
    </>
  );
}
