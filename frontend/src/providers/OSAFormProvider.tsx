import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../types/schemas";
import { FormDataType } from "../types/types";

interface OSAFormProps {
  children: React.ReactNode;
}

export function OSAFormProvider({ children }: OSAFormProps) {
  const methods = useForm<FormDataType>({
    defaultValues: {
      name: "Ida",
      email: "",
    },
    resolver: zodResolver(formSchema),
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}
