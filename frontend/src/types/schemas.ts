import { z } from "zod";

export const guestSchema = z.object({
  firstName: z.string().min(1, { message: "Du har inte fyllt i namn" }),
  lastName: z.string().min(1, { message: "Du har inte fyllt i efternamn" }),
  email: z.string().email().min(1, { message: "Fyll i en giltig e-mail" }),
  attendingWedding: z.boolean(),
  attendingDinner: z.boolean(),
  specialFood: z.string().optional(),
  misc: z.string().optional(),
});
