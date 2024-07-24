export function add_more_time(
  fecha: string,
  tipoPeriodo: 1 | 2 | 3 | 4,
  cantidad: number
): string {
  const partesFecha = fecha.split("/");
  if (partesFecha.length !== 3) {
    return fecha;
  }

  const dia = parseInt(partesFecha[0], 10);
  const mes = parseInt(partesFecha[1], 10) - 1;
  const año = parseInt(partesFecha[2], 10);

  const fechaOriginal = new Date(año, mes, dia);

  if (isNaN(fechaOriginal.getTime())) {
    return fecha;
  }

  const fechaResultado = new Date(fechaOriginal);

  switch (tipoPeriodo) {
    case 1:
      fechaResultado.setDate(fechaResultado.getDate() + cantidad);
      break;
    case 2:
      fechaResultado.setDate(fechaResultado.getDate() + cantidad * 7);
      break;
    case 3:
      fechaResultado.setMonth(fechaResultado.getMonth() + cantidad);
      break;
    case 4:
      fechaResultado.setFullYear(fechaResultado.getFullYear() + cantidad);
      break;
    default:
      return fecha;
  }

  const diaResultado = fechaResultado.getDate();
  const mesResultado = fechaResultado.getMonth() + 1;
  const añoResultado = fechaResultado.getFullYear();

  const fechaFormateada = `${diaResultado
    .toString()
    .padStart(2, "0")}/${mesResultado
    .toString()
    .padStart(2, "0")}/${añoResultado}`;

  return fechaFormateada;
}
