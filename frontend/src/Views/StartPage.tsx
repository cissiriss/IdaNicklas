import disneyImage from "../assets/IMG_0871.jpg";

export const StartPage = () => {
  return (
    <>
      <h1 id="header">Nicklas & Ida</h1>
      <h2 id="subheader">2025-06-28</h2>
      <div className="welcome-text">
        <img id="disney-image" src={disneyImage} alt="couple" />
      </div>
    </>
  );
};
