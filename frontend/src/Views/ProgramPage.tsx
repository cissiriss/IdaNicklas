import { FridayPage } from "./FridayPage";
import bild5 from "../assets/Bild5.jpg";
import { Image } from "../components/Image";

export default function ProgramPage() {
  return (
    <>
      <div className="flex flex-col sm:justify-center sm:text-center font-alumni font-light p-4">
        <h1 className="font-windsong text-5xl mb-8">Program</h1>
        <div id="friday flex flex-col">
          <FridayPage />
        </div>
        <div id="location" className="flex flex-col sm:justify-center">
          <h2 className="font-windsong text-3xl mt-4 sm:text-center">
            Om området
          </h2>
          <p className="text-xl">
            Vårat bröllop kommer äga rum i Jonsered strax utanför Partille. När
            vi letade efter festlokal och stötte på fabriksområdet Jonsered blev
            vi förälskade i såväl lokalen som området. Vi hoppas att ni ska få
            dela vår varma känsla!
            <br />
            <a
              className="underline"
              href="https://www.partille.se/uppleva--gora/besoksmal/jonsereds-brukssamhalle/"
            >
              Jonsereds fabriker {""}
            </a>
            är ett vackert område med välbevarad industriell karaktär.
            Fabriksområdet innehåller idag restauranger, caféer, museum med
            mera. Området ligger drygt 1 km från{" "}
            <a
              className="underline"
              href="https://tradgardsresan.se/sv/tradgardarna/jonsereds-tradgardar-partille"
            >
              Jonsereds trädgårdar
            </a>{" "}
            som är ett vackert besöksmål.
            <br />
            Får du tid över mellan festligheterna rekommenderar vi varmt en
            promenad både i fabriksområdet och Jonsereds trädgårdar.
          </p>
          <Image imageSource={bild5} altText="couple" />
        </div>
        <div className="flex flex-col" id="wedding-ceremony">
          <h2 className="font-windsong text-3xl mt-8">Vigsel i Jonsered</h2>
          <p className="mb-8 text-xl">
            Vigseln startar 15.00 vid herrgårdsscenen i Jonsereds trädgårdar.
          </p>
        </div>
        <div>
          <h2 className="font-windsong text-3xl mt-8">Middag och Fest</h2>
          <p className="text-xl">
            Barn är fantastiska men hör inte hemma på vårat bröllop, med
            undantag för de som ammar (och Tage).
          </p>
        </div>
        <div className="flex flex-col mt-8" id="speaches">
          <h2 className="font-windsong text-3xl">Tal</h2>
          <p className="text-xl">
            Önskar du att hålla tal? Skicka in din anmälan här så planerar våra
            toastmastrar in ditt framträdande i kvällens schema. Vi vill ha er
            anmälan senast 1/3-2025.
          </p>
        </div>
      </div>
      <div id="dresscode" className="font-alumni font-light p-4 text-xl">
        <h2 className="text-3xl mt-8 font-windsong sm:text-center">Klädkod</h2>
        <p className="sm:text-center text-xl">
          Klädkoden för vårat bröllop är kavaj.
        </p>
        <p className="text-xl mb-2 sm:text-center">
          Exempel på passande kläder till klädkoden:
        </p>
        <div className="mb-2">
          <p className="text-xl"> Herr:</p>

          <ul className="list-disc ml-6">
            <li>
              Kostym i valfri färg. Kavaj, byxa och eventuellt väst ska vara i
              samma tyg och färg.
            </li>

            <li>Skjorta i valfri färg.</li>
            <li>
              Skorna ska vara svarta eller bruna. Eventuellt skärp ska vara i
              samma färg som skorna.
            </li>
            <li> Slips eller fluga är obligatoriskt. </li>
          </ul>
        </div>
        <div>
          <p className="text-xl"> Dam:</p>

          <ul className="list-disc ml-6 mb-8">
            <li>
              Klänning, kjol eller byxdress. Det ska vara elegant men inte lika
              uppklätt som en mörk aftonklädsel. Klänning eller kjol ska minst
              gå ned till knäna, men inte vara golvlång.{" "}
            </li>
            <li>
              För skor passar finare skor än vad du brukar bära till vardags.
              Exempelvis klackskor eller ballerinaskor. (Efter middagen kan ni
              sadla om till mer dansvänliga skor)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
