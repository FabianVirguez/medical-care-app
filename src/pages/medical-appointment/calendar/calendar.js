import { useEffect } from "react";
import { BasicLayout } from "@/layouts";
import { Seo, Separator, InfoUser } from "@/components/Shared";
import { AppointmentForm } from "@/components/Appointment";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import styles from "./calendar.module.scss";

export default function Calendar() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/join/sign-in");
  }, [user, router]);

  return (
    <>
      <Seo title="Solicita tu cita | Medical Care" />

      <BasicLayout isContainer relative>
        <Separator height={50} />
        <div className={styles.content}>
          <h1>Solicita tu cita medica</h1>
          <p>
            En Medical Care puedes solicitar tu cita medica de manera rapida y
            sencilla.
          </p>
          <Separator height={10} />
          <hr />
          <Separator height={20} />
          <InfoUser />
          <Separator height={20} />
          <hr />
          <Separator height={20} />
          <div className={styles.formContent}>
            <h3>Información de la cita</h3>
            <Separator height={40} />
            <AppointmentForm />
          </div>
        </div>
        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
