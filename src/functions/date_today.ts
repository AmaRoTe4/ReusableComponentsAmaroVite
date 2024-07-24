export function date_today() {
  const fechaActual = new Date();
  const formatoFecha = `${fechaActual.getDate()}/${
    fechaActual.getMonth() + 1
  }/${fechaActual.getFullYear()}`;
  return formatoFecha;
}
