import { FridayPage } from "./FridayPage";
import bild5 from "../assets/Bild5.jpg";
import bild6 from "../assets/Bild6.jpg";

export default function ProgramPage() {
  return (
    <div className="container font-alumni flex flex-col p-4">
      <h1 className="font-windsong text-5xl text-center mb-8">Program</h1>
      <div id="friday">
        <h2 className="font-windsong text-2xl mt-4">Uppladdning Fredag</h2>
        <FridayPage />
      </div>
      <div className="flex flex-col max-w-2xl" id="location">
        <h2 className="font-windsong text-2xl mt-4">Om området</h2>
        <p>
          Vårat bröllop kommer äga rum i Jonsered strax utanför Partille. När vi
          letade efter festlokal och stötte på fabriksområdet Jonsered blev vi
          förälskade i såväl lokalen som området. Vi hoppas att ni ska få dela
          vår varma känsla!
          <br />
          <a href="https://www.partille.se/uppleva--gora/besoksmal/jonsereds-brukssamhalle/">
            Jonsereds fabriker {""}
          </a>
          är ett vackert område med välbevarad industriell karaktär.
          Fabriksområdet innehåller idag restauranger, caféer, museum med mera.
          Området ligger drygt 1 km från{" "}
          <a href="https://tradgardsresan.se/sv/tradgardarna/jonsereds-tradgardar-partille">
            Jonsereds trädgårdar
          </a>{" "}
          som är ett vackert besöksmål.
          <br />
          Får du tid över mellan festligheterna rekommenderar vi varmt en
          promenad både i fabriksområdet och Jonsereds trädgårdar.
        </p>
        <img
          src={bild5}
          alt="couple"
          className="self-center rounded w-[90%] sm:w-2/3 sm:ml-8"
        />
      </div>
      <div className="flex flex-col max-w-2xl" id="wedding-ceremony">
        <h2 className="font-windsong text-2xl mt-8">Vigsel i Jonsered</h2>
        <p className="mb-8">
          Vigseln startar 15.00 vid herrgårdsscenen i Jonsereds trädgårdar.
        </p>
        <img
          src={bild6}
          alt="couple"
          className="self-center rounded w-[90%] sm:w-2/3 sm:ml-8"
        />
      </div>
      <div>
        <h2 className="font-windsong text-2xl mt-8">Middag och Fest</h2>
        <p>
          Barn är fantastiska men hör inte hemma på vårat bröllop, med undantag
          för de som ammar (och Tage).
        </p>
      </div>
      <div className="flex flex-col max-w-2xl mt-8" id="speaches">
        <h2 className="font-windsong text-2xl">Tal</h2>
        <p>
          Önskar du att hålla tal? Skicka in din anmälan här så planerar våra
          toastmastrar in ditt framträdande i kvällens schema. Vi vill ha er
          anmälan senast 1/3-2025.
        </p>
      </div>
      <div className="max-w-2xl" id="dresscode">
        <h2 className="text-2xl mt-8 font-windsong">Klädkod</h2>
        <p>Klädkoden för vårat bröllop är kavaj.</p>
        <p className="mb-2">Exempel på passande kläder till klädkoden:</p>
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
    </div>
  );
}
