export const fecha_actual = () => {
  const fechaActual = new Date();

  const dia: number = fechaActual.getDate();
  const mes: number = fechaActual.getMonth() + 1;
  const anio: number = fechaActual.getFullYear();
  const horas: number = fechaActual.getHours();
  const minutos: number = fechaActual.getMinutes();

  return {
    fecha:
      dia.toString().padStart(2, "0") +
      "/" +
      mes.toString().padStart(2, "0") +
      "/" +
      anio,
    hora:
      horas.toString().padStart(2, "0") +
      ":" +
      minutos.toString().padStart(2, "0"),
  };
};

export function adaptar_fecha(texto: string) {
  return texto.replace(/\//g, "-");
}

export function separar_string_por_slash(str: string): string[] {
  return str.split("/");
}
