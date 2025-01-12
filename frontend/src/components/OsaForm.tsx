import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { formSchema } from "../types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormType } from "../types/types";

export default function OsaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guests: [
        {
          attendingWedding: "true",
          attendingDinner: "true",
          name: "",
          lastName: "",
          email: "",
          specialFood: "",
          misc: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "guests",
  });

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const guestsValues = watch("guests");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-col w-ful max-w-xs mx-auto"
    >
      {fields.map((field, index) => (
        <fieldset key={field.id} className="mb-4">
          <div className="mt-4 form-control max-w-[200px]">
            <h3 className="text-2xl"> Jag kommer på bröllopet:</h3>
            <label className="label cursor-pointer">
              <input
                {...register(`guests.${index}.attendingWedding`)}
                type="radio"
                value="true"
                className="radio"
              />
              Självklart!
              <input
                {...register(`guests.${index}.attendingWedding`)}
                type="radio"
                value="false"
                className="radio"
              />
              Tyvärr inte..
            </label>
          </div>
          <div className="mt-4">
            <input
              {...register(`guests.${index}.name`)}
              type="text"
              placeholder="Förnamn"
              className="input input-bordered w-full max-w-xs mb-4"
            />
            {errors.guests?.[index]?.name && (
              <p className="text-red-500">
                {errors.guests[index].name.message}
              </p>
            )}

            <input
              {...register(`guests.${index}.email`)}
              type="text"
              className="input input-bordered w-full max-w-xs mb-4"
              placeholder="Email"
              required
            />
            {errors.guests?.[index]?.email && (
              <p className="text-red-500">
                {errors.guests[index].email.message}
              </p>
            )}
          </div>

          {/* Show additional fields if attendingWedding is true */}
          {guestsValues?.[index]?.attendingWedding === "true" && (
            <>
              <div className="mt-4">
                <input
                  {...register(`guests.${index}.lastName`)}
                  type="text"
                  placeholder="Efternamn"
                  className="input input-bordered w-full max-w-xs mb-4"
                />
                {errors.guests?.[index]?.lastName && (
                  <p className="text-red-500">
                    {errors.guests[index].lastName.message}
                  </p>
                )}

                <fieldset>
                  <div className="font-alumnibold form-control max-w-[200px]">
                    <h3 className="text-xl mt-4">
                      {" "}
                      Jag kommer på fredagens middag:
                    </h3>
                    <label className="label cursor-pointer">
                      <input
                        {...register(`guests.${index}.attendingDinner`)}
                        type="radio"
                        value="true"
                        className="radio"
                      />
                      Självklart!
                      <input
                        {...register(`guests.${index}.attendingDinner`)}
                        type="radio"
                        value="false"
                        className="radio"
                      />
                      Tyvärr inte..
                    </label>
                  </div>
                </fieldset>

                <input
                  {...register(`guests.${index}.specialFood`)}
                  type="text"
                  name="Specialkost"
                  placeholder="Specialkost"
                  className="input input-bordered w-full max-w-xs mb-4"
                />

                <p className="sm:text-center text-xl sm:ml-8 sm:mr-8">
                  Är det något annat brudparet bör känna till?
                </p>
                <input
                  {...register(`guests.${index}.misc`)}
                  type="text"
                  name="Övrigt"
                  placeholder="Övrigt"
                  className="input input-bordered w-full max-w-xs mb-4"
                />
              </div>
            </>
          )}
          <button type="button" onClick={() => remove(index)} className="btn">
            Ta bort gäst
          </button>
        </fieldset>
      ))}
      <button
        type="button"
        onClick={() =>
          append({
            attendingWedding: "true",
            attendingDinner: "true",
            name: "",
            lastName: "",
            email: "",
            specialFood: "",
            misc: "",
          })
        }
        className="btn"
      >
        Lägg till gäst
      </button>
      <button type="submit" className="btn mt-4">
        Spara
      </button>
    </form>
  );
}
