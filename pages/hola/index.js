import Image from "next/image";

export default function Hola() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto md:px-4">
        <div className="items-start justify-center flex flex-wrap">
          <div className="relative w-full md:w-4/12 md:px-4">
            <Image
              src="/images/hola_yo.webp"
              layout="responsive"
              width={300}
              height={300}
              alt="Hola"
            />
            <span className="text-cb-green text-9xl md:text-10xl font-extrabold transform absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 md:-rotate-90 md:top-1/2 md:left-0">
              HOLA
            </span>
          </div>
          <div className="w-full md:w-6/12 px-12 md:px-4 mt-20 md:mt-0">
            <div className="md:pr-12">
              <div className="relative flex flex-1 flex-col">
                <p className="mb-4 font-extrabold text-4xl">Soy Caro Bello,</p>
                <p className="mb-4 text-lg leading-tight">
                  licenciada en diseño gráfico y fanática del bordado
                  "punch-needle".
                </p>
                <p className="mb-4 text-lg leading-tight">
                  Me topé con esta técnica de bordado de casualidad, ante el
                  deseo de decorar mi hogar con objetos textiles que existían en
                  mi cabeza pero no en el mercado. De forma autodidacta, después
                  de muchos intentos, aprendí a domar la "aguja mágica" y logré
                  lucir con orgullo los almohadones que soñaba en mi casa.
                </p>
                <p className="mb-4 text-lg leading-tight">
                  Ese fue solo el inicio de un gran camino de experimentación
                  con telas, lanas y muchas agujas de formas raras que, con mis
                  conocimientos de diseño, fotografía e ilustración, me llevó a
                  crear un gran portfolio de almohadones con diseños propios y
                  personajes de historias únicas.
                </p>
                <p className="mb-4 text-lg leading-tight">
                  Mi proceso creativo empieza en el universo digital y termina
                  con lo más analógico del mundo: mis manos. Me gusta el
                  contraste que genera diseñar motivos vectoriales en la
                  computadora y verlos finalmente plasmados en lana y tela.
                  Disfruto comparar las imágenes del plan y el resultado en cada
                  proyecto.
                </p>
                <p className="mb-4 text-lg leading-tight">
                  Actualmente reparto mi tiempo entre el diseño gráfico
                  freelance y este hermoso proyecto en el que me reto a que cada
                  bordado sea un nuevo desafío. También vendo mis piezas
                  bordadas a clientes de todo el mundo y doy clases de
                  punch-needle en mi pequeño hogar-estudio lleno de almohadones.
                  Algunas de mis piezas fueron publicadas en revistas como
                  OHLALÁ, varios blogs de decoración y estuvieron presentes en
                  la edición 2019 de Casa FOA.
                </p>
                <div className="relative md:hidden">
                  <Image
                    src="/images/hola_aguja.svg"
                    width={150}
                    height={50}
                    alt="Aguja"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
