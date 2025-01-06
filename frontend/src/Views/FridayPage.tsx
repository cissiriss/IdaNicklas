import bild4 from "../assets/Bild4.jpg";

export const FridayPage = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full max-w-2xl">
        <p>
          Brudparet kommer att kicka igång bröllopshelgen med middag på Poppels
          bryggeri som ligger i Jonsereds fabriker. Om ni vill får ni gärna äta
          middag med oss! Glöm inte att klicka i att ni deltar på fredagens
          middag när ni OSAr. Alla är välkomna att delta på middagen vare sig
          hotellvistelse eller ej. Vi har ingen klädkod för fredagens middag men
          brudparet kommer att ha skjorta/chinos och sommarklänning.
        </p>
        <img src={bild4} alt="couple" />
      </div>
    </>
  );
};
