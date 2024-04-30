import { Container, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import { BasicLayout } from "@/layouts";
import { useAuth } from "@/hooks";
import { Separator, Seo } from "@/components/Shared";
import styles from "./medical-appointment.module.scss";
import Link from "next/link";
import { BannerFirst } from "@/components/Home/BannerFirst";

export default function MedicalAppointment() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Seo title="Gestiona tus citas" />

      <BasicLayout isContainer relative>
        <Separator height={50} />
        <BannerFirst src="/images/banner-3x.png" alt="banner" />
        <Separator height={50} />
        <Container>
          <h2 className={styles.title}>Gestiona tus citas medicas</h2>
          <Separator height={20} />
          <div className={styles.content}>
            <div className={styles.item}>
              <Link
                href="/medical-appointment/calendar"
                className={styles.toAction}
              >
                <Icon name="user md" />
                <span>Agendar cita</span>
              </Link>
            </div>
            <div className={styles.item}>
              <Link
                href="/medical-appointment/schedule"
                className={styles.toAction}
              >
                <Icon name="calendar alternate outline" />
                <span>Consultar agenda de citas</span>
              </Link>
            </div>
            <div className={styles.item}>
              <Link
                href="https://www.med-informatica.net/TERAPEUTICA-STAR/HistoriaClinica.pdf"
                target="_blank"
                className={styles.toAction}
              >
                <Icon name="file pdf" />
                <span>Historial clinico</span>
              </Link>
            </div>
            <div className={styles.item}>
              <Link
                href="/medical-appointment/procedures-exams"
                className={styles.toAction}
              >
                <Icon name="calendar alternate outline" />
                <span>Procedimientos / Examenes</span>
              </Link>
            </div>
            <div className={styles.item}>
              <Link
                href="/medical-appointment/procedures-exams"
                className={styles.toAction}
              >
                <Icon name="user md" />
                <span>Autorización de medicamentos</span>
              </Link>
            </div>
          </div>
        </Container>
        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
