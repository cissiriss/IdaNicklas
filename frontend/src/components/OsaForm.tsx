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
        <div className="form-container font-alumnibold">
          <fieldset>
            <div className="mt-4 form-control max-w-[200px]">
              <h3 className="text-2xl"> Jag kommer på bröllopet:</h3>
              <label className="label cursor-pointer">
                {/* <div className="text-xl p-2">Självklart</div> */}
                <input
                  onClick={() => setValue("attendingWedding", true)}
                  type="radio"
                  name="attendingWedding"
                  className="radio"
                />
                Självklart!
                <input
                  onClick={() => setValue("attendingWedding", false)}
                  type="radio"
                  name="attendingWedding"
                  className="radio"
                />
                Tyvärr inte..
              </label>
            </div>
          </fieldset>

          {attendingWedding && (
            <>
              <fieldset>
                <div className="font-alumnibold form-control max-w-[200px]">
                  <h3 className="text-xl mt-4"> Jag kommer på fredagen:</h3>

                  <label className="label cursor-pointer">
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
                </div>
              </fieldset>
              <div className="mt-4">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Förnamn"
                  className="input input-bordered w-full max-w-xs mb-4"
                />

                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Efternamn"
                  className="input input-bordered w-full max-w-xs mb-4"
                />

                <input
                  {...register("email")}
                  type="text"
                  className="input input-bordered w-full max-w-xs mb-4"
                  placeholder="Email"
                  required
                />

                <input
                  {...register("specialFood")}
                  type="text"
                  name="Specialkost"
                  placeholder="Specialkost"
                  className="input input-bordered w-full max-w-xs mb-4"
                />

                <p>Är det något annat brudparet bör känna till? </p>
                <input
                  {...register("misc")}
                  type="text"
                  name="Övrigt"
                  placeholder="Övrigt"
                  className="input input-bordered w-full max-w-xs mb-4"
                />
              </div>
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
