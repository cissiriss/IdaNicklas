import bild1 from "../assets/Bild1.jpg";
import { WelcomeMarkup } from "../assets/Texts";
import { CountDown } from "../components/CountDown";
import { Image } from "../components/Image";

export const StartPage = () => {
  const targetDate = new Date("2025-06-28T14:59:59");
  return (
    <>
      <div
        id="home"
        className="flex flex-row items-center justify-center mt-32"
      >
        <h1 className="text-blue font-bold text-[90px] md:text-[120px] font-alumnip ">
          Nicklas
        </h1>
        <h1 className="text-darkblue font-windsong pr-4 text-[90px] md:text-[120px]">
          &
        </h1>
        <h1 className="text-blue font-bold  pl-2 font-alumnip  text-[90px] md:text-[120px]">
          Ida
        </h1>
      </div>

      <h2 className="text-darkblue font-bold text-4xl mb-4 mt-8 text-center font-alumnip ">
        2025-06-28
      </h2>

      <Image imageSource={bild1} altText="couple" />
      <div className="sm:text-2xl sm:w-2/3 sm:self-center font-alumni font-light md:text-center ">
        <WelcomeMarkup />
      </div>

      <div className="flex flex-col items-center m-4 font-alumn font-light">
        <h3 className="text-darkblue font-windsong text-2xl mb-4 mt-6">
          Tid kvar till bröllopet 🤵🏼👰🏼‍♀️
        </h3>
        <CountDown targetDate={targetDate} />
      </div>
    </>
  );
};
