import bild1 from "../assets/Bild1.jpg";
import { CountDown } from "../components/CountDown";
import { Image } from "../components/Image";

export const StartPage = () => {
  const targetDate = new Date("2025-06-28T14:59:59");
  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-blue font-bold text-[90px] sm:text-[120px] font-alumnip ">
          Nicklas
        </h1>
        <h1 className="text-darkblue font-windsong pr-4 text-[90px] sm:text-[120px]">
          &
        </h1>
        <h1 className="text-blue font-bold  pl-2 font-alumnip  text-[90px] sm:text-[120px]">
          Ida
        </h1>
      </div>
      <h2 className="text-darkblue font-bold text-4xl m-4 text-center font-alumnip ">
        2025-06-28
      </h2>
      <div className="flex justify-center">
        <Image imageSource={bild1} altText="couple" />
      </div>
      <div className="m-4 sm:text-2xl font-alumni font-light md:text-center ">
        <p className="sm:ml-16 sm:mr-16 ">
          Välkommen till Ida och Nicklas bröllopssida! Här samlar vi all
          information som du behöver veta inför vår brölloppshelg. Du är en av
          personerna som vi gärna vill dela vår stora dag med och vi hoppas att
          du har möjlighet att medverka.
        </p>
      </div>

      <div className="flex flex-col items-center m-4 font-alumn font-light mt-8 mb-8">
        <h3 className="text-darkblue font-windsong text-2xl mb-4">
          Tid kvar till bröllopet 🤵🏼👰🏼‍♀️
        </h3>
        <CountDown targetDate={targetDate} />
      </div>
    </>
  );
};
