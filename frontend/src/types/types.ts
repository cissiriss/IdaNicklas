import { z } from "zod";
import { guestSchema } from "./schemas";

export type GuestType = z.infer<typeof guestSchema>;

export enum HeadingEnum {
  section = "section",
  subSection = "subSection",
}
