import { useFormContext } from "react-hook-form";

export default function IsNotComingForm() {
  const { register } = useFormContext();

  return (
    <fieldset className="form-container">
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
    </fieldset>
  );
}
