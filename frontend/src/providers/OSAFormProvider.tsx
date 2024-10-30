import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { guestSchema } from "../types/schemas";
import { GuestType } from "../types/types";

interface OSAFormProps {
  children: React.ReactNode;
}

export function OSAFormProvider({ children }: OSAFormProps) {
  const methods = useForm<GuestType>({
    defaultValues: {
      name: "",
      // lastName: "",
      email: "",
      // attendingWedding: false,
      // attendingDinner: false,
      // specialFood: undefined,
      // misc: undefined,
    },
    resolver: zodResolver(guestSchema),
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}
