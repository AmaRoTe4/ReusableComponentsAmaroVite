export const normalizeErrors = (
  errores: Record<string, any>
): Record<string, any> => {
  const normalizedErrors: Record<string, any> = {};

  for (const [, error] of Object.entries(errores)) {
    const { message, path } = error;
    normalizedErrors[path[0]] = {
      message,
      status: message.trim().length === 0,
    };
  }

  return normalizedErrors;
};
