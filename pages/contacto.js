import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto (próximamente) - Caro Bello</title>
      </Head>
      <main className="grid container py-20 mx-auto md:px-4 lg:px-16 xl:px-64">
        <h1 className="place-self-center text-4xl tracking-widest font-medium">CONTACTO</h1>
        <h2 className="mt-16 uppercase place-self-center text-4xl md:text-8xl font-bold text-cb-green">
          Próximamente
        </h2>
      </main>
    </>
  );
}