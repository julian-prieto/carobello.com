import Image from "next/image";

export default function Hola() {
  return (
    <div className="flex flex-1 flex-col md:flex-row mt-8 md:justify-center md:items-stretch md:px-32 lg:px-64">
      <div className="hidden md:flex w-128 min-h-128 max-h-128">
        <div className="relative flex-1">
          <Image
            src="/images/hola_yo.webp"
            layout="fill"
            objectFit="scale-down"
            alt="Hola"
          />
          <span className="text-cb-green text-9xl font-extrabold transform absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 md:-rotate-90 md:top-1/2 md:left-0">
            HOLA
          </span>
        </div>
      </div>
      <div className="flex md:hidden flex-1">
        <div className="relative flex-1">
          <Image
            src="/images/hola_yo.webp"
            layout="responsive"
            width={300}
            height={300}
            alt="Hola"
          />
          <span className="text-cb-green text-9xl font-extrabold transform absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 md:-rotate-90 md:top-1/2 md:left-0">
            HOLA
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-16 mt-24 md:mt-0 md:pr-0">
        <p className="mb-4 font-extrabold text-4xl">Soy Caro Bello,</p>
        <p className="mb-4 text-lg leading-tight">
          licenciada en diseño gráfico y fanática del bordado "punch-needle".
        </p>
        <p className="mb-4 text-lg leading-tight">
          Me topé con esta técnica de bordado de casualidad, ante el deseo de
          decorar mi hogar con objetos textiles que existían en mi cabeza pero
          no en el mercado. De forma autodidacta, después de muchos intentos,
          aprendí a domar la "aguja mágica" y logré lucir con orgullo los
          almohadones que soñaba en mi casa.
        </p>
        <p className="mb-4 text-lg leading-tight">
          Ese fue solo el inicio de un gran camino de experimentación con telas,
          lanas y muchas agujas de formas raras que, con mis conocimientos de
          diseño, fotografía e ilustración, me llevó a crear un gran portfolio
          de almohadones con diseños propios y personajes de historias únicas.
        </p>
        <p className="mb-4 text-lg leading-tight">
          Mi proceso creativo empieza en el universo digital y termina con lo
          más analógico del mundo: mis manos. Me gusta el contraste que genera
          diseñar motivos vectoriales en la computadora y verlos finalmente
          plasmados en lana y tela. Disfruto comparar las imágenes del plan y el
          resultado en cada proyecto.
        </p>
        <p className="mb-4 text-lg leading-tight">
          Actualmente reparto mi tiempo entre el diseño gráfico freelance y este
          hermoso proyecto en el que me reto a que cada bordado sea un nuevo
          desafío. También vendo mis piezas bordadas a clientes de todo el mundo
          y doy clases de punch-needle en mi pequeño hogar-estudio lleno de
          almohadones. Algunas de mis piezas fueron publicadas en revistas como
          OHLALÁ, varios blogs de decoración y estuvieron presentes en la
          edición 2019 de Casa FOA.
        </p>
        <div className="relative flex-1 md:hidden">
          <Image
            src="/images/hola_aguja.svg"
            width={150}
            height={50}
            alt="Aguja"
          />
        </div>
      </div>
    </div>
  );
}
