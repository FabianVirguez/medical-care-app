import * as Yup from "yup";

export function initialValues() {
  return {
    date: "",
    time: "",
    specialist: "",
    type: "",
    office: "",
  };
}

export function validationSchema() {
  return Yup.object({
    date: Yup.string().required("La fecha es requerida"),
    time: Yup.string().required("La hora es requerida"),
    specialist: Yup.string().required("El especialista es requerido"),
    type: Yup.string().required("El tipo de cita es requerido"),
    office: Yup.string().required("El consultorio es requerido"),
  });
}
