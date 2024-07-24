import { valoresSchema } from "../../const/schemas/form";
import { normalizeErrors } from "../errores/normalizador";
import { z } from "zod";

export const validateForm = ({ valores }: { valores: any }) => {
  let errores = {};

  try {
    valoresSchema.parse(valores);
  } catch (error) {
    if (error instanceof z.ZodError) errores = { ...errores, ...error.errors };
  }

  if (Object.keys(errores).length > 0) {
    return {
      status: false,
      errores: normalizeErrors(errores),
    };
  } else {
    return {
      status: true,
      errores: {},
    };
  }
};
