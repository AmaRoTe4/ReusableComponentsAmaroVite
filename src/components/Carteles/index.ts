import Swal from "sweetalert2";

export const cartelInfo = (
  title: string,
  text: string = "",
  funcion: () => any
) =>
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Ok",
    preConfirm: () => {
      funcion();
    },
  });

export const cartelError = (title: string, text: string = "") =>
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: "error",
    confirmButtonText: "Ok",
  });

export const cartelSuccess = (title: string, text: string = "") =>
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: "success",
    confirmButtonText: "Ok",
  });

export const cartelWait = (title: string, text: string = "") => {
  //@ts-ignore
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    allowOutsideClick: false,
    showConfirmButton: false,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });
};
