import { add_more_time } from "./add_more_time";
import { getCookie, setCookie } from "./cookies";
import { date_today } from "./date_today";
import {
  adaptar_fecha,
  fecha_actual,
  separar_string_por_slash,
} from "./fecha_actual";
import newUUID from "./uuid";
import { normalizeErrors } from "./errores/normalizador";
import { validateForm } from "./validaciones/form";
import { view_fecha } from "./view/view_fecha";
import { view_fecha_hora } from "./view/view_fecha_hora";
import { view_hora } from "./view/view_hora";

const exportaciones = {
  add_more_time,
  getCookie,
  setCookie,
  date_today,
  adaptar_fecha,
  fecha_actual,
  separar_string_por_slash,
  newUUID,
  normalizeErrors,
  validateForm,
  view_fecha,
  view_fecha_hora,
  view_hora,
};

export default exportaciones;
