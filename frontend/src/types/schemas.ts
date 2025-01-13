import { z } from "zod";

export const guestSchema = z.object({
  name: z.string().min(1, { message: "Du har inte fyllt i namn" }),
  lastName: z.string().min(1, { message: "Du har inte fyllt i efternamn" }),
  email: z
    .string()
    .email({ message: "Fyll i en giltig e-mail" })
    .min(1, { message: "Fyll i en giltig e-mail" }),
  attendingWedding: z
    .enum(["true", "false"], {
      message: "Du måste välja något.. ",
    })
    .default("true"),
  attendingDinner: z
    .enum(["true", "false"], {
      message: "Du måste välja något.. ",
    })
    .default("true"),
  specialFood: z.string().optional(),
  misc: z.string().optional(),
});

export const formSchema = z.object({
  guests: z.array(guestSchema),
});
