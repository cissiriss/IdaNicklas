import { z } from "zod";

export const formSchema = z.object({
  name: z.string().nonempty({ message: "Du har inte fyllt i namn" }),
  email: z.string().email().nonempty({ message: "Fyll i en giltig e-mail" }),
});
