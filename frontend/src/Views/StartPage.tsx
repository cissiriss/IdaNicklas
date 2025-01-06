import bild1 from "../assets/bild1.jpg";
import { CountDown } from "../components/CountDown";

export const StartPage = () => {
  const targetDate = new Date("2025-06-28T14:59:59");
  return (
    <>
      <div id="header-container">
        <h1 className="header">Nicklas</h1>
        <h1 id="and">&</h1>
        <h1 className="header">Ida</h1>
      </div>
      <h2 id="subheader">2025-06-28</h2>
      <div className="welcome-text">
        <img src={bild1} alt="couple" />
      </div>
      <div className="welcome-text m-4">
        <p>
          Välkommen till Ida och Nicklas bröllopssida! Här samlar vi all
          information som du behöver veta inför vår brölloppshelg. Du är en av
          personerna som vi gärna vill dela vår stora dag med och vi hoppas att
          du har möjlighet att medverka.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h3>Tid kvar till bröllopet 🤵🏼👰🏼‍♀️ </h3>
        <CountDown targetDate={targetDate} />
      </div>
    </>
  );
};
