import { useState } from "react";

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState("");

  async function sendConfirmationEmail(email: string): Promise<void> {
    try {
      const response = await fetch("api/sendconfirmation", {
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

      console.log("Bekräftelsemail har skickats");
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
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Anmäl dig</button>
    </form>
  );
};

export default SignupForm;
