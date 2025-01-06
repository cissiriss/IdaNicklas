import { useState } from "react";
import OsaForm from "../components/OsaForm";
import { useFieldArray } from "react-hook-form";

export const OSAPage = () => {
  let index = 1;

  const [isDisabled, setIsDisabled] = useState(false);

  const { fields, append } = useFieldArray({
    name: "guests",
  });

  const handleClick = () => {
    append({
      name: "",
    });
    if (index === 2) {
      setIsDisabled(true);
    }
  };

  return (
    <>
      <div>
        <OsaForm />
      </div>
      {fields.map((person) => (
        <div key={person.id}>
          <p>Person {index++}</p>
          <OsaForm />
        </div>
      ))}
      <div className="button-container">
        <input
          className="btn"
          disabled={isDisabled}
          type="button"
          onClick={handleClick}
          value="OSA för 1 till person"
        />
      </div>
    </>
  );
};
