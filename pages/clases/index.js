import Image from "next/image";
import { ReadMoreLink } from "components";

export default function Clases() {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 flex-row">
          <div className="relative flex-1 h-80 md:h-full">
            <Image src="/images/clases_01.jpg" layout="fill" objectFit="cover" alt="Bordado Barbudo" />
            <span className="absolute top-1/2 left-1/2 md:left-16 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 text-10xl md:text-13xl text-white opacity-80 font-bold">
              1
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-row">
          <div className="flex flex-1 flex-col justify-between bg-cb-gray text-black min-h-50vw md:min-h-0 md:h-25vw">
            <span className="m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">taller presencial de punch needle</span>
            <ReadMoreLink href="/" className="m-6 lg:m-12" color="black">
              DEJAME TUS DATOS Y TE ENVÍO MÁS INFO
            </ReadMoreLink>
          </div>
          <div className="flex flex-1 flex-col bg-cb-gray text-black p-6 lg:p-12 min-h-50vw md:min-h-0 md:h-25vw">
            <p className="leading-tight mb-1">
              <strong>• Nivel:</strong> INICIACIÓN
            </p>
            <p className="leading-tight mb-1">
              <strong>• Modalidad:</strong> Presencial
            </p>
            <p className="leading-tight mb-1">
              <strong>• Duración:</strong> 3 hs
            </p>
            <p className="leading-tight mb-1">
              <strong>• Horario:</strong> 14 a 17 hs
            </p>
            <p className="leading-tight mb-1">
              <strong>• Lugar:</strong> Saavedra, Bs. As.
            </p>
            <p className="leading-tight mb-1">
              <strong>• Recursos adicionales:</strong> Te envío por mail la presentación que vemos en clases.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 flex-row">
          <div className="relative flex-1 h-80 md:h-full">
            <Image src="/images/clases_02.jpg" layout="fill" objectFit="cover" alt="Bordado Barbudo" />
            <span className="absolute top-1/2 left-1/2 md:left-16 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 text-10xl md:text-13xl text-white opacity-80 font-bold">
              2
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-row">
          <div className="flex flex-1 flex-col justify-between bg-white text-black min-h-50vw md:min-h-0 md:h-25vw">
            <span className="flex-1 m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">
              curso online 1: bordado XL con aguja mágica
            </span>
            <div className="flex flex-col md:flex-row m-6 lg:m-12 space-y-4 md:space-x-8 md:space-y-0">
              <ReadMoreLink
                target="_blank"
                href="https://www.domestika.org/es/courses/747-bordado-xl-con-aguja-magica/carobello"
                className=""
                color="black"
              >
                VER MÁS
              </ReadMoreLink>
              <ReadMoreLink target="_blank" href="https://www.youtube.com/watch?v=etQi8tl93xM" className="" color="black">
                VIDEO FAQ
              </ReadMoreLink>
            </div>
          </div>
          <div className="flex flex-1 flex-col bg-white text-black p-6 lg:p-12 min-h-50vw md:min-h-0 md:h-25vw">
            <p className="leading-tight mb-1">
              <strong>• Nivel:</strong> INICIACIÓN
            </p>
            <p className="leading-tight mb-1">
              <strong>• Modalidad:</strong> Online y a tu ritmo
            </p>
            <p className="leading-tight mb-1">
              <strong>• Acceso ilimitado para siempre</strong>
            </p>
            <p className="leading-tight mb-1">
              <strong>• Duración:</strong> 3:38 hs
            </p>
            <p className="leading-tight mb-1">
              <strong>• Lecciones:</strong> 20
            </p>
            <p className="leading-tight mb-1">
              <strong>• Recursos adicionales:</strong> 20 (16 archivos)
            </p>
            <p className="leading-tight mb-1">
              <strong>• Audio:</strong> Español
            </p>
            <p className="leading-tight mb-1">
              <strong>• Subtítulos:</strong> Español, Inglés, Portugués, Alemán
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 flex-row">
          <div className="relative flex-1 h-80 md:h-full">
            <Image src="/images/clases_03.jpg" layout="fill" objectFit="cover" alt="Bordado Barbudo" />
            <span className="absolute top-1/2 left-1/2 md:left-16 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 text-10xl md:text-13xl text-white opacity-80 font-bold">
              3
            </span>
            <div className="absolute flex justify-center items-center h-full w-full bg-white opacity-40" />
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-black font-bold text-4xl md:text-6xl">
              PRÓXIMAMENTE
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-row">
          <div className="flex flex-1 flex-col justify-between bg-black text-white min-h-50vw md:min-h-0 md:h-25vw">
            <span className="flex-1 m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">curso online 2: muñecos bordados</span>
            {/* <div className="flex md:flex-row">
              <ReadMoreLink href="http://www.google.com.ar" className="m-6 lg:m-12" color="white">
                VER MÁS
              </ReadMoreLink>
            </div> */}
          </div>
          <div className="flex flex-1 flex-col bg-black text-white p-6 lg:p-12 min-h-50vw md:min-h-0 md:h-25vw">
            <p className="leading-tight mb-1">
              <strong>• Nivel:</strong> -
            </p>
            <p className="leading-tight mb-1">
              <strong>• Modalidad:</strong> Online y a tu ritmo
            </p>
            <p className="leading-tight mb-1">
              <strong>• Acceso ilimitado para siempre</strong>
            </p>
            <p className="leading-tight mb-1">
              <strong>• Duración:</strong> - hs
            </p>
            <p className="leading-tight mb-1">
              <strong>• Lecciones:</strong> -
            </p>
            <p className="leading-tight mb-1">
              <strong>• Recursos adicionales:</strong> - (- archivos)
            </p>
            <p className="leading-tight mb-1">
              <strong>• Audio:</strong> Español
            </p>
            <p className="leading-tight mb-1">
              <strong>• Subtítulos:</strong> Español, Inglés, Portugués, Alemán
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center overflow-hidden h-16 md:h-64">
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-cb-green font-bold text-7xl md:text-13xl leading-snug">
          ¡ANIMATE!
        </span>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xl md:text-6xl leading-snug whitespace-nowrap">
          mirá los testimonios :)
        </span>
      </div>
    </section>
  );
}
