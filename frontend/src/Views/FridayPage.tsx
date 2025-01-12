import bild4 from "../assets/Bild4.jpg";

export const FridayPage = () => {
  return (
    <>
      <div className="flex flex-col sm:justify-center mb-8">
        <h2 className="font-windsong text-3xl mt-4 mb-2 sm:text-center">
          Uppladdning Fredag
        </h2>
        <p className="sm:text-center text-xl sm:ml-8 sm:mr-8">
          Brudparet kommer att kicka igång bröllopshelgen med middag på Poppels
          bryggeri som ligger i Jonsereds fabriker. Om ni vill får ni gärna äta
          middag med oss! Glöm inte att klicka i att ni deltar på fredagens
          middag när ni OSAr. Alla är välkomna att delta på middagen vare sig
          hotellvistelse eller ej. Vi har ingen klädkod för fredagens middag men
          brudparet kommer att ha skjorta/chinos och sommarklänning.
        </p>
        <img
          src={bild4}
          alt="couple"
          className="rounded w-[90%] mt-4 sm:w-2/3 sm:ml-8 sm:self-center"
        />
      </div>
    </>
  );
};
