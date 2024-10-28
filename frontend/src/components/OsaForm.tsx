import { SubmitHandler, useFormContext } from "react-hook-form";
import { FormDataType } from "../types/types";
import IsNotComingForm from "./IsNotComingForm";
import { StartFieldSet } from "./StartFieldset";
import { useState } from "react";

export default function OsaForm() {
  const { register, handleSubmit } = useFormContext<FormDataType>();
  const [isComing, setIsComing] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-container">
        <StartFieldSet setIsComing={setIsComing} />

        {isComing && (
          <>
            <fieldset className="radio-buttons-container">
              <label>
                Jag kommer gärna kvällen innan fredagen 27/6
                <input type="radio" name="osa-friday" value="Självklart" />{" "}
                Självklart!
                <input type="radio" name="osa-friday" value="Tyvärr" /> Tyvärr
                inte..
              </label>
            </fieldset>

            <label className="input-field">
              Förnamn
              <input {...register("name")} type="text" />
            </label>
            <label className="input-field">
              Efternamn
              <input type="text" />
            </label>
            <label className="input-field">
              Mailadress
              <input type="email" {...register("email")} />
            </label>
            <label className="input-field">
              Specialkost
              <input type="text" name="Specialkost" />
            </label>
            <label className="input-field">
              Övrigt
              <p>Är det något annat brudparet bör känna till? </p>
              <input type="text" name="Övrigt" />
            </label>
          </>
        )}
      </div>

      <div className="osa-form">{!isComing && <IsNotComingForm />}</div>

      <button type="submit">Spara</button>
    </form>
  );
}
