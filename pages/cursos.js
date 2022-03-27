import { ReadMoreLink } from "components";
import Head from "next/head";
import Image from "next/image";
import { generateImageSizes } from "utils";

const stats = {
  first: [
    { value: "+20.000", text: "Alumnos de todo el mundo" },
    { value: "100%", text: "Calificaciones positivas" },
    { value: "20", text: "Lecciones" },
    { value: "20", text: "Recursos adicionales" },
    { value: "3:38 hs", text: "De duración" },
    { value: "8", text: "Idiomas de subtítulos" },
  ],
  second: [
    { value: "+2.500", text: "Alumnos de todo el mundo" },
    { value: "100%", text: "Calificaciones positivas" },
    { value: "19", text: "Lecciones" },
    { value: "20", text: "Recursos adicionales" },
    { value: "3:57 hs", text: "De duración" },
    { value: "8", text: "Idiomas de subtítulos" },
  ],
};

export default function Cursos() {
  return (
    <>
      <Head>
        <title>Cursos - Por Caro Bello</title>
      </Head>
      <main className="grid py-20">
        <h1 className="place-self-center text-4xl tracking-widest font-medium mb-16">CURSOS ONLINE</h1>
        <div className="bg-black text-white">
          <div className="container max-w-7xl mx-auto p-12 space-y-8">
            <p className="font-light">
              Los cursos se adquieren a través de la plataforma internacional Doméstika y son 100% online. Ya
              están grabados, por lo que empiezan y acaban cuando quieras.{" "}
              <span className="bg-cb-green text-black font-medium">
                Se hacen a tu propio ritmo, podés verlos todas las veces que quieras y nunca se vencen.
              </span>
            </p>
            <p className="font-light">
              Cada curso se divide en diferentes unidades, y cada una de ellas incluye lecciones, textos
              explicativos, tareas y prácticas para llevar a cabo tu proyecto paso a paso, recursos y
              documentos adjuntos complementarios. También tendrás acceso a un{" "}
              <span className="bg-cb-green text-black font-medium">foro exclusivo</span> donde podrás
              interactuar con otros alumnos de todo el mundo y conmigo, así como también compartir tus
              trabajos y el proyecto que realices, creándose de esta manera una hermosa comunidad de bordado.
            </p>
          </div>
        </div>
        <section className="place-self-center mt-16">
          <div className="grid grid-cols-12 place-self-center container max-w-7xl sm:px-12 py-8">
            <div className="col-span-12 sm:col-span-4 relative w-full h-auto aspect-square">
              <a
                href="https://www.domestika.org/es/courses/747-bordado-xl-con-aguja-magica/carobello"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/cursos/Curso_1.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="Bordado XL con aguja mágica"
                  sizes={generateImageSizes({
                    sm: "100vw",
                    big: "40vw",
                  })}
                />
              </a>
            </div>
            <div className="col-span-12 mt-8 sm:mt-0 sm:col-span-8 px-8 text-black space-y-8 self-center ">
              <h2 className="font-bold text-4xl">Curso 1: Bordado XL con aguja mágica</h2>
              <p>
                En este curso, aprenderás paso a paso a dominar la aguja mágica y sus diferentes puntadas para
                hacer una pieza exclusiva. Da el paso y renová los espacios de tu hogar con tus propias piezas
                de diseño.
              </p>
              <p>
                <span className="font-bold">¿Cuál es el proyecto del curso?</span> Bordarás un almohadón de
                40x40 cm, aplicando las puntadas aprendidas durante el curso mediante la técnica de punch
                needle en formato XL.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <ReadMoreLink
                  className="px-2 py-1 bg-cb-green"
                  href="https://www.domestika.org/es/courses/747-bordado-xl-con-aguja-magica/carobello"
                  target="_blank"
                  rel="noreferrer"
                  color="black"
                >
                  VER MÁS INFORMACIÓN SOBRE EL CURSO
                </ReadMoreLink>
                <ReadMoreLink
                  className="px-2 py-1 bg-cb-green"
                  href="https://www.youtube.com/watch?v=etQi8tl93xM"
                  target="_blank"
                  rel="noreferrer"
                  color="black"
                >
                  VER VIDEO DE PREGUNTAS FRECUENTES
                </ReadMoreLink>
              </div>
            </div>
            <div className="mt-8 col-span-12 grid grid-cols-12 p-4 gap-4">
              {stats.first.map((stat) => (
                <div key={stat.value} className="col-span-6 md:col-span-2 flex flex-col justify-start">
                  <span className="text-center font-extrabold text-4xl">{stat.value}</span>
                  <span className="uppercase text-center text-sm">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div class="separator my-8 mx-auto" />

        <section className="place-self-center">
          <div className="grid grid-cols-12 container max-w-7xl sm:px-12 py-8">
            <div className="col-span-12 sm:col-span-4 relative w-full h-auto aspect-square">
              <a
                href="https://www.domestika.org/es/courses/1716-diseno-y-bordado-de-munecos-con-aguja-magica/carobello"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/cursos/Curso_2.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="Bordado XL con aguja mágica"
                  sizes={generateImageSizes({
                    sm: "100vw",
                    big: "40vw",
                  })}
                />
              </a>
            </div>
            <div className="col-span-12 mt-8 sm:mt-0 sm:col-span-8 px-8 text-black space-y-8 self-center ">
              <h2 className="font-bold text-4xl">Curso 2: Diseño y bordado de muñecos con aguja mágica</h2>
              <p>
                En este curso aprenderás cómo bordar un muñeco con punch needle. Descubrirás todos los trucos
                para utilizar correctamente la aguja mágica en distintos formatos y aplicarás puntos planos y
                en relieve para dar vida a un personaje imposible de encontrar en ninguna tienda de juguetes.
              </p>
              <p>
                <span className="font-bold">¿Cuál es el proyecto del curso?</span> Diseñarás y bordarás un
                personaje que luego convertirás en muñeco, aplicando puntos de punch needle en versión fina y
                gruesa para lograr diferentes texturas.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <ReadMoreLink
                  className="px-2 py-1 bg-cb-green"
                  href="https://www.domestika.org/es/courses/1716-diseno-y-bordado-de-munecos-con-aguja-magica/carobello"
                  target="_blank"
                  rel="noreferrer"
                  color="black"
                >
                  VER MÁS INFORMACIÓN SOBRE EL CURSO
                </ReadMoreLink>
              </div>
            </div>
            <div className="mt-8 col-span-12 grid grid-cols-12 p-4 gap-4">
              {stats.second.map((stat) => (
                <div key={stat.value} className="col-span-6 md:col-span-2 flex flex-col justify-start">
                  <span className="text-center font-extrabold text-4xl">{stat.value}</span>
                  <span className="uppercase text-center text-sm">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
