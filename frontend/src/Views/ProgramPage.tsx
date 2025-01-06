import { FridayPage } from "./FridayPage";
import bild5 from "../assets/Bild5.jpg";
import bild6 from "../assets/Bild6.jpg";

export default function ProgramPage() {
  return (
    <div className="container flex flex-col items-center ">
      <h1>Program</h1>
      <div id="friday">
        <h2>Uppladdning Fredag</h2>
        <FridayPage />
      </div>
      <div className="flex flex-col items-center max-w-2xl" id="location">
        <h2>Om området</h2>
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
        <img src={bild5} alt="" />
      </div>
      <div
        className="flex flex-col items-center max-w-2xl"
        id="wedding-ceremony"
      >
        <h2>Vigsel i Jonsered</h2>
        <p>Vigseln startar 15.00 vid herrgårdsscenen i Jonsereds trädgårdar.</p>
        <img src={bild6} alt="" />
      </div>
      <div>
        <h2>Middag och Fest</h2>
        <p>
          Barn är fantastiska men hör inte hemma på vårat bröllop, med undantag
          för de som ammar (och Tage).
        </p>
      </div>
      <div className="flex flex-col items-center max-w-2xl" id="speaches">
        <h2>Tal</h2>
        <p>
          Önskar du att hålla tal? Skicka in din anmälan här så planerar våra
          toastmastrar in ditt framträdande i kvällens schema. Vi vill ha er
          anmälan senast 1/3-2025.
        </p>
      </div>
      <div className=" max-w-2xl" id="dresscode">
        <h2>Klädkod</h2>
        <p>Klädkoden för vårat bröllop är kavaj.</p>
        <p>Exempel på passande kläder till klädkoden:</p>
        <div className="mb-4">
          Herr:
          <br />
          <ul className="list-disc">
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
          Dam:
          <br />
          <ul className="list-disc">
            <li>
              Klänning, kjol eller byxdress. Det ska vara elegant men inte lika
              uppklätt som en mörk aftonklädsel. Klänning eller kjol ska minst
              gå ned till knäna, men inte vara golvlång.{" "}
            </li>
            <li>
              {" "}
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
