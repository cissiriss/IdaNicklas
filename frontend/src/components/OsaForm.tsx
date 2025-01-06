import { SubmitHandler, useFormContext } from "react-hook-form";
import { GuestType } from "../types/types";
import IsNotComingForm from "./IsNotComingForm";

export default function OsaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useFormContext<GuestType>();

  const attendingWedding = watch("attendingWedding");
  console.log(attendingWedding);

  const email = watch("email");

  const onSubmit: SubmitHandler<GuestType> = async (data) => {
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (email) {
        alert("Bekräftelsemail har skickats");
      }
    } catch (error) {
      console.log(error);
      alert("Det gick inte att skicka bekräftelsemailet.");
    }
    console.log(data);
    console.log(errors);
    reset();
  };

  // async function sendConfirmationEmail(email: string): Promise<void> {
  //   try {
  //     const response = await fetch("api/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       throw new Error(`Error: ${response.status} - ${errorText}`);
  //     }
  //     alert("Bekräftelsemail har skickats");
  //   } catch (error) {
  //     console.error("Fel vid skickande av bekräftelsemail:", error);
  //     alert("Det gick inte att skicka bekräftelsemailet.");
  //   }
  // }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <fieldset>
            <label>
              Jag kommer på bröllopet
              <input
                onClick={() => setValue("attendingWedding", true)}
                type="radio"
                name="attendingWedding"
                className="radio"
                defaultChecked
              />
              Självklart!
              <input
                type="radio"
                name="attendingWedding"
                className="radio"
                onClick={() => setValue("attendingWedding", false)}
              />
              Tyvärr inte..
            </label>
          </fieldset>

          {attendingWedding && (
            <>
              <fieldset>
                <label>
                  Jag kommer gärna kvällen innan fredagen 27/6
                  <input
                    type="radio"
                    onChange={() => setValue("attendingDinner", true)}
                    name="attendingDinner"
                    className="radio"
                  />
                  {errors.attendingDinner && (
                    <p>{errors.attendingDinner.message}</p>
                  )}
                  Självklart!
                  <input
                    onChange={() => setValue("attendingDinner", false)}
                    type="radio"
                    name="attendingDinner"
                    className="radio"
                  />
                  Tyvärr inte..
                </label>
              </fieldset>

              <input
                {...register("name")}
                type="text"
                placeholder="Förnamn"
                className="input input-bordered w-full max-w-xs"
              />

              <input
                {...register("lastName")}
                type="text"
                placeholder="Efternamn"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  {...register("email")}
                  type="text"
                  className="max-w-xs"
                  placeholder="Email"
                  required
                />
              </label>

              <input
                {...register("specialFood")}
                type="text"
                name="Specialkost"
                placeholder="Specialkost"
                className="input input-bordered w-full max-w-xs"
              />

              <p>Är det något annat brudparet bör känna till? </p>
              <input
                {...register("misc")}
                type="text"
                name="Övrigt"
                placeholder="Övrigt"
                className="input input-bordered w-full max-w-xs"
              />
            </>
          )}
        </div>
        <div className="osa-form">
          {!attendingWedding && <IsNotComingForm />}
        </div>

        <button type="submit">Spara</button>
      </form>
    </>
  );
}
