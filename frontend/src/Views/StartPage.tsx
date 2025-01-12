import bild1 from "../assets/Bild1.jpg";
import { CountDown } from "../components/CountDown";

export const StartPage = () => {
  const targetDate = new Date("2025-06-28T14:59:59");
  return (
    <>
      <div className="header-container flex flex-row items-center justify-center">
        <h1 className="text-blue font-bold text-[90px] sm:text-[120px] font-alumni">
          Nicklas
        </h1>
        <h1 className="text-darkblue font-windsong pr-4 text-[90px] sm:text-[120px]">
          &
        </h1>
        <h1 className="text-blue font-bold  pl-2 font-alumni text-[90px] sm:text-[120px]">
          Ida
        </h1>
      </div>
      <h2 className="text-darkblue font-bold text-4xl m-4 text-center font-alumni">
        2025-06-28
      </h2>
      <div className="welcome-tex flex justify-center">
        <img
          className="m-4 rounded w-[90%] sm:w-2/3 sm:ml-8"
          src={bild1}
          alt="couple"
        />
      </div>
      <div className="m-4 text-lg font-alumni">
        <p>
          Välkommen till Ida och Nicklas bröllopssida! Här samlar vi all
          information som du behöver veta inför vår brölloppshelg. Du är en av
          personerna som vi gärna vill dela vår stora dag med och vi hoppas att
          du har möjlighet att medverka.
        </p>
      </div>

      <div className="flex flex-col items-center m-4 font-alumni">
        <h3 className="text-darkblue text-2xl">Tid kvar till bröllopet 🤵🏼👰🏼‍♀️</h3>
        <CountDown targetDate={targetDate} />
      </div>
    </>
  );
};
