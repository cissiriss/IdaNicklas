import { z } from "zod";
import { formSchema, guestSchema } from "./schemas";

export type GuestType = z.infer<typeof guestSchema>;

export type FormType = z.infer<typeof formSchema>;
