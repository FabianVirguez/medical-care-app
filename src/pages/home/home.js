import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared";

const platformsId = {
  playstation: 1,
  nintendo: 2,
  xbox: 3,
  pc: 4,
};

export default function HomePage() {
  return (
    <>
      <Seo />

      <BasicLayout>
        <Separator height={100} />
        <Home.BannerFirst
          src="/images/home-banner-first.png"
          alt="banner first"
        />

        <Separator height={50} />

        <BarTrust />

        <Separator height={50} />

        <Home.BannerFirst
          src="/images/home-banner-2x.png"
          alt="banner second"
        />

        <Separator height={50} />

        <BannerAd
          title="Registrate para obtener el mejor servicio para tu salud"
          subtitle="¡Puedes solicitar cita de inmediato!"
          btnTitle="Ingresa ahora"
          btnLink="/join/sign-in"
          image="/images/home-banner-3x.jpg"
        />
      </BasicLayout>
    </>
  );
}
