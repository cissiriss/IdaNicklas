import disneyImage from "../assets/IMG_0871.jpg";
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
        <img id="disney-image" src={disneyImage} alt="couple" />
      </div>
      <h3>Tid kvar till bröllopet 🤵🏼👰🏼‍♀️ </h3>
      <div className="countdown-container">
        <CountDown targetDate={targetDate} />
      </div>
    </>
  );
};
