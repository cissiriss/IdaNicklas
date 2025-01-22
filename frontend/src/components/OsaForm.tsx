import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { formSchema } from "../types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormType } from "../types/types";
import RsvpModal from "./RsvpModal";
import { useEffect } from "react";

export default function OsaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
    reset,
    control,
    watch,
    setValue,
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
    } finally {
      reset();
    }
  };

  const guestsValues = watch("guests");

  let atLeastOneGuestAttendingWedding = false;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    atLeastOneGuestAttendingWedding = guestsValues.some(
      (guest) => guest.attendingWedding === "true"
    );
  }, [atLeastOneGuestAttendingWedding, guestsValues]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex-col w-full max-w-[600px] mt-8 mx-auto p-4 bg-gray-100 rounded-lg`}
      >
        {fields.map((field, index) => (
          <fieldset key={field.id} className="flex flex-col items-center">
            {index > 0 && <hr className="border-gray-400 w-full mb-4 mt-4" />}
            <div className="font-alumnibold form-control max-w-[250px]">
              <p className="text-xl">Gäst {index + 1}</p>
              <h3 className="text-xl mt-4"> Jag kommer på bröllopet:</h3>
              <label className="label cursor-pointer">
                <input
                  {...register(`guests.${index}.attendingWedding`)}
                  type="radio"
                  value="true"
                  className="radio mr-2"
                  onClick={() => {
                    setValue(`guests.${index}.attendingDinner`, "true");
                  }}
                />
                Självklart!
                <input
                  {...register(`guests.${index}.attendingWedding`)}
                  type="radio"
                  value="false"
                  className="radio sm:mr-2 sm:ml-4"
                  onClick={() => {
                    setValue(`guests.${index}.attendingDinner`, "false");
                  }}
                />
                Tyvärr inte..
              </label>
            </div>
            <div className="mt-4 w-full flex flex-col items-center">
              <input
                {...register(`guests.${index}.name`)}
                type="text"
                placeholder="Förnamn"
                className={`input input-bordered w-full max-w-xs ${
                  errors.guests?.[index]?.name ? "input-error text-error" : ""
                }`}
              />
              {errors.guests?.[index]?.name && (
                <p className="text-error text-error">
                  {errors.guests[index].name?.message}
                </p>
              )}
              <input
                {...register(`guests.${index}.lastName`)}
                type="text"
                placeholder="Efternamn"
                className={`input input-bordered w-full max-w-xs mt-4 ${
                  errors.guests?.[index]?.lastName
                    ? "input-error text-error"
                    : ""
                } `}
              />
              {errors.guests?.[index]?.lastName && (
                <p className="input-error text-error">
                  {errors.guests[index].lastName?.message}
                </p>
              )}
              <input
                {...register(`guests.${index}.email`)}
                type="text"
                placeholder="Email"
                className={`input input-bordered w-full max-w-xs mt-4 ${
                  errors.guests?.[index]?.email ? "input-error text-error" : ""
                }`}
              />

              {errors.guests?.[index]?.email && (
                <p className="input-error text-error">
                  {errors.guests[index].email?.message}
                </p>
              )}
            </div>

            {/* Show additional fields if attendingWedding is true */}
            {guestsValues?.[index]?.attendingWedding === "true" && (
              <>
                <div>
                  <fieldset className="sm:flex sm:flex-col sm:items-center">
                    <div className="font-alumnibold form-control max-w-[250px]">
                      <h3 className="text-xl">
                        Jag kommer på fredagens middag:
                      </h3>
                      <label className="label cursor-pointer mb-4">
                        <input
                          {...register(`guests.${index}.attendingDinner`)}
                          type="radio"
                          value="true"
                          className="radio sm:mr-2"
                        />
                        Självklart!
                        <input
                          {...register(`guests.${index}.attendingDinner`)}
                          type="radio"
                          value="false"
                          className="radio sm:mr-2 sm:ml-4"
                        />
                        Tyvärr inte..
                      </label>
                    </div>
                  </fieldset>

                  <input
                    {...register(`guests.${index}.specialFood`)}
                    type="text"
                    placeholder="Specialkost"
                    className={`input input-bordered w-full max-w-xs mb-4 ${
                      errors.guests?.[index]?.specialFood
                        ? "input-error text-error"
                        : ""
                    }`}
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
                    className={`input input-bordered w-full max-w-md mb-4 ${
                      errors.guests?.[index]?.misc
                        ? "input-error text-error"
                        : ""
                    }`}
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
              className="btn text-xl font-light w-full bg-blue hover:bg-darkblue text-white sm:w-1/2 mt-4"
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
            className="btn self-center sm:w-1/2 w-full text-xl hover:bg-darkblue font-light bg-blue text-white mt-4"
            disabled={fields.length >= 2}
          >
            Lägg till gäst
          </button>
          <button
            type="submit"
            className="btn self-center sm:w-1/2 w-full text-xl hover:bg-darkblue font-light bg-blue text-white mt-4"
          >
            Skicka OSA
          </button>
        </div>
      </form>
      <div>
        {isSubmitSuccessful === isSubmitted && (
          <RsvpModal
            isSubmitted={isSubmitted}
            atLeastOneGuestAttendingWedding={atLeastOneGuestAttendingWedding}
          />
        )}
      </div>
    </>
  );
}
