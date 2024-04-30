import Head from "next/head";

export function Seo(props) {
  const {
    title = "Medical Care PMI - Sistema de salud",
    description = "Medical Care PMI es un sistema de salud que te permite gestionar tus citas médicas de forma rápida y sencilla",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}
