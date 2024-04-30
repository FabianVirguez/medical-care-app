import { useState } from "react";
import { Form, MessageHeader, Message } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Appointment } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./createForm.form";

const appointmentCtrl = new Appointment();

export function AppointmentForm() {
  const [showMessage, setShowMessage] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const MessageInfo = ({ title, message }) => (
    <Message info>
      <MessageHeader>{title}</MessageHeader>
      <p>{message}</p>
    </Message>
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await appointmentCtrl.create({
          data: {
            user: user.id,
            ...formValue,
          },
        });
        if (response) {
          setShowMessage(true);
          setTimeout(() => {
            router.push("/medical-appointment/schedule");
          }, 3000);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        label="Fecha:"
        name="date"
        type="date"
        min={formatDate(new Date())}
        placeholder="dd/mm/aaaa"
        value={formik.values.date}
        onChange={formik.handleChange}
        error={formik.errors.date}
      />
      <Form.Input
        label="Hora:"
        name="time"
        type="time"
        placeholder="--:--"
        value={formik.values.time}
        onChange={formik.handleChange}
        error={formik.errors.time}
      />
      <Form.Select
        label="Especialista:"
        name="specialist"
        placeholder="Seleccione un especialista"
        value={formik.values.specialist}
        options={[
          { key: "1", text: "Dr. Juan Perez", value: "Dr. Juan Perez" },
          {
            key: "2",
            text: "Dr. Maria Rodriguez",
            value: "Dr. Maria Rodriguez",
          },
          {
            key: "3",
            text: "Dr. Carlos Sanchez",
            value: "Dr. Carlos Sanchez",
          },
        ]}
        onChange={(e) => formik.setFieldValue("specialist", e.target.innerText)}
        error={formik.errors.specialist}
      />
      <Form.Select
        label="Tipo de especialidad:"
        name="type"
        placeholder="Seleccione una especialidad"
        value={formik.values.type}
        options={[
          {
            key: "1",
            text: "Medicina general",
            value: "Medicina general",
          },
          { key: "2", text: "Odontologia", value: "Odontologia" },
          { key: "3", text: "Pediatría", value: "Pediatría" },
        ]}
        onChange={(e) => formik.setFieldValue("type", e.target.innerText)}
        error={formik.errors.type}
      />
      <Form.Select
        label="Consultorio:"
        name="office"
        placeholder="Seleccione un consultorio"
        value={formik.values.office}
        options={[
          {
            key: "1",
            text: "Consultorio Calle 123",
            value: "Consultorio Calle 123",
          },
          {
            key: "2",
            text: "Consultorio Calle 456",
            value: "Consultorio Calle 456",
          },
          {
            key: "3",
            text: "Consultorio Calle 789",
            value: "Consultorio Calle 789",
          },
        ]}
        onChange={(e) => formik.setFieldValue("office", e.target.innerText)}
        error={formik.errors.office}
      />
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Agendar cita
      </Form.Button>
      {showMessage && (
        <MessageInfo
          title={"¡Solicitud cita!"}
          message={"Su cita se ha creado con exito"}
        />
      )}
    </Form>
  );
}
