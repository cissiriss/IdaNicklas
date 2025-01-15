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
    console.log({ data });
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

  console.log(guestsValues);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex-col w-full max-w-xs mt-8 mx-auto p-4 bg-gray-100 rounded-lg`}
    >
      {fields.map((field, index) => (
        <fieldset key={field.id} className="mb-4">
          {index > 0 && <hr className="border-gray-400 width-full mb-4 mt-4" />}
          <div className="mt-4 form-control max-w-[250px]">
            <p className="text-xl">Gäst {index + 1}</p>
            <h3 className="text-xl mt-4"> Jag kommer på bröllopet:</h3>
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
              className={`input input-bordered ${
                errors.guests?.[index]?.name ? "input-error text-error" : ""
              } w-full max-w-xs mb-4`}
            />
            {errors.guests?.[index]?.name && (
              <p className="text-error">{errors.guests[index].name?.message}</p>
            )}
            <input
              {...register(`guests.${index}.lastName`)}
              type="text"
              placeholder="Efternamn"
              className={`input input-bordered ${
                errors.guests?.[index]?.lastName ? "input-error text-error" : ""
              } w-full max-w-xs mb-4`}
              aria-errormessage="hello"
            />
            {errors.guests?.[index]?.lastName && (
              <p className="text-error">
                {errors.guests[index].lastName?.message}
              </p>
            )}
            <input
              {...register(`guests.${index}.email`)}
              type="text"
              placeholder="Email"
              className={`input input-bordered ${
                errors.guests?.[index]?.email ? "input-error text-error" : ""
              } w-full max-w-xs mb-4`}
            />

            {errors.guests?.[index]?.email && (
              <p className="text-error">
                {errors.guests[index].email?.message}
              </p>
            )}
          </div>

          {/* Show additional fields if attendingWedding is true */}
          {guestsValues?.[index]?.attendingWedding === "true" && (
            <>
              <div>
                <fieldset>
                  <div className="font-alumnibold form-control max-w-[250px]">
                    <h3 className="text-xl">Jag kommer på fredagens middag:</h3>
                    <label className="label cursor-pointer mb-4">
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
                  placeholder="Specialkost"
                  className={`input input-bordered ${
                    errors.guests?.[index]?.specialFood
                      ? "input-error text-error"
                      : ""
                  } w-full max-w-xs mb-4`}
                />

                {errors.guests?.[index]?.specialFood && (
                  <p className="text-error">
                    {errors.guests[index].specialFood?.message}
                  </p>
                )}
                <p className="sm:text-center text-xl sm:ml-8 sm:mr-8">
                  Är det något annat brudparet bör känna till?
                </p>
                <input
                  {...register(`guests.${index}.misc`)}
                  type="text"
                  placeholder="Övrigt"
                  className={`input input-bordered ${
                    errors.guests?.[index]?.misc ? "input-error text-error" : ""
                  } w-full max-w-xs mb-4`}
                />
                {errors.guests?.[index]?.misc && (
                  <p className="text-error">
                    {errors.guests[index].misc?.message}
                  </p>
                )}
              </div>
            </>
          )}
          <button
            type="button"
            onClick={() => remove(index)}
            className="btn text-xl font-light w-full bg-blue hover:bg-darkblue text-white mt-4"
            disabled={fields.length <= 1}
          >
            Ta bort gäst
          </button>
        </fieldset>
      ))}

      <div className="flex flex-col">
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
          className="btn text-xl font-light w-full bg-blue text-white"
          disabled={fields.length >= 2}
        >
          Lägg till gäst
        </button>
        <button
          type="submit"
          className="btn text-xl font-light bg-blue text-white mt-4"
        >
          Skicka OSA
        </button>
      </div>
    </form>
  );
}
