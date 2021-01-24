import Image from "next/image";

export default function Hola() {
  return (
    <section className="container py-20 mx-auto md:px-4">
      <div className="items-start justify-center flex flex-wrap">
        <div className="relative w-full md:w-4/12 md:px-4">
          <Image src="/images/hola_yo.jpg" layout="responsive" width={300} height={300} alt="Hola" />
          <span className="text-cb-green text-9xl md:text-10xl font-extrabold transform absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 md:-rotate-90 md:top-1/2 md:left-0">
            HOLA
          </span>
        </div>
        <div className="w-full md:w-6/12 px-12 md:px-4 mt-20 md:mt-0">
          <div className="md:pr-12">
            <div className="relative flex flex-1 flex-col">
              <p className="mb-4 font-extrabold text-4xl md:text-8xl relative">Soy</p>
              <div className="relative">
                <p className="mb-4 font-extrabold text-4xl md:text-8xl">Caro Bello,</p>
                <div className="absolute right-0 bottom-0 -z-10">
                  <div className="relative hidden md:flex">
                    <Image src="/images/hola_aguja.svg" width={400} height={150} alt="Aguja" />
                  </div>
                </div>
              </div>
              <p className="mb-4 text-lg leading-tight"></p>
              <p className="mb-4 text-lg leading-tight">licenciada en diseño gráfico y bordadora argentina de punch needle.</p>
              <p className="mb-4 text-lg leading-tight">
                De forma autodidacta aprendí a domar la "aguja mágica" y ese fue el inicio de un gran camino de experimentación con telas,
                lanas y muchas agujas de formas raras que, con mis conocimientos de diseño, fotografía e ilustración, me llevó a crear un
                gran portfolio de almohadones, cuadros y muñecos, donde las texturas son las protagonistas.
              </p>
              <p className="mb-4 text-lg leading-tight">
                Actualmente reparto mi tiempo entre el diseño gráfico freelance y este hermoso proyecto artístico en el que me reto a que
                cada bordado sea un nuevo desafío.
              </p>
              <p className="mb-4 text-lg leading-tight">
                ¡También comparto mis conocimientos! Doy clases presenciales grupales en mi casa y, en 2020 publiqué mi primer curso online
                titulado
                <a
                  className="text-black font-bold pl-2"
                  href="https://www.domestika.org/es/courses/747-bordado-xl-con-aguja-magica/carobello"
                  target="_blank"
                >
                  Bordado XL con Aguja Mágica
                </a>
                , dictado en la plataforma web Doméstika.
              </p>
              <div className="relative md:hidden">
                <Image src="/images/hola_aguja.svg" width={150} height={50} alt="Aguja" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
