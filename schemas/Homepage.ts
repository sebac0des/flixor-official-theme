import { z } from "zod";

export const formSchema = z.object({
  fullname: z
    .string({
      required_error: "Este campo es obligatorio.",
    })
    .min(2, {
      message: "Ingresa tu nombre completo.",
    })
    .max(35, {
      message: "Tu nombre debe ser más corto.",
    }),
  email: z
    .string({
      required_error: "Debes ingresar un email.",
    })
    .email({
      message: "Ingresa un email válido.",
    })
    .min(5),
  phone_number: z
    .string()
    .max(13, { message: "El teléfono es inválido" })
    .refine(
      (v) => {
        let n = Number(v);
        return !isNaN(n) && v?.length > 0;
      },
      { message: "Ingresa un telefono valido" }
    ),

  message: z.string(),
});
