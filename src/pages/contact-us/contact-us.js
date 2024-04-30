import { Container, Tab } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";

import { Separator, Seo } from "@/components/Shared";
import styles from "./contact-us.module.scss";
import { BannerFirst } from "@/components/Home/BannerFirst";

export default function ContactUs() {
  return (
    <>
      <Seo title="Contactatanos | Medical Care" />

      <BasicLayout isContainer relative>
        <Separator height={50} />
        <BannerFirst src="/images/home-banner-2x.png" alt="banner second" />
        <Separator height={50} />
        <h1>Contactanos</h1>
        <Container>
          <div className={styles.contact}>
            <p>Si tienes alguna duda o sugerencia, no dudes en contactarnos.</p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:contactanos@medical.com">
                contactanos@medical.com
              </a>
            </p>
            <p>
              <strong>Telefono:</strong>
              <a href="tel:+123456789">+123 456 789</a>
            </p>
          </div>
          <Separator height={50} />
          <form class="ui form">
            <div class="field">
              <label>Nombre</label>
              <input type="text" name="first-name" placeholder="First Name" />
            </div>
            <div class="field">
              <label>Apellido</label>
              <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <div class="field">
              <label>Correo</label>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div class="field">
              <label>Observación</label>
              <textarea type="text" name="observer" placeholder="Comentarios" />
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" tabindex="0" class="hidden" />
                <label>Acepta terminos y condiciones</label>
              </div>
            </div>
            <button class="ui button" type="submit">
              Enviar
            </button>
          </form>
        </Container>
        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
