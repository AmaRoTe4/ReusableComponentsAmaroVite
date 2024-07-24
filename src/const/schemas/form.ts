import { z } from "zod";

export const valoresSchema = z.object({
  first_name: z.string().nonempty("El nombre es obligatorio"),
  last_name: z.string().nonempty("El apellido es obligatorio"),
  address: z.string().nonempty("La dirección es obligatoria"),
  phone: z.string().nonempty("El teléfono es obligatorio"),
});
