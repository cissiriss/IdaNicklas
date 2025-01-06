import { GuestType } from "../types/types";
import { useFormContext } from "react-hook-form";

const SignupForm = () => {
  const { register, watch } = useFormContext<GuestType>();

  const email = watch("email");

  async function sendConfirmationEmail(email: string): Promise<void> {
    try {
      const response = await fetch("api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
      alert("Bekräftelsemail har skickats");
    } catch (error) {
      console.error("Fel vid skickande av bekräftelsemail:", error);
      alert("Det gick inte att skicka bekräftelsemailet.");
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email) {
      sendConfirmationEmail(email);
    } else {
      alert("Vänligen ange en giltig e-postadress");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-postadress:
        <input {...register("email")} type="email" value={email} required />
      </label>
    </form>
  );
};

export default SignupForm;
