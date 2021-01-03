import Image from "next/image";
import { ReadMoreLink } from "components";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen -z-10">
      <div
        className="pt-h-full bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: "url(/images/home_hola.png)" }}
      >
        <div className="flex">
          <div className="hidden md:flex flex-1"></div>
          <div className="flex flex-1 flex-col justify-center items-center bg-black text-white py-12 md:h-25vw">
            <span className="text-center mb-4 px-12 font-bold text-3xl">
              ¡HOLA!
            </span>
            <span className="text-center px-12">
              Soy Caro Bello, diseñadora y bordadora de punch needle argentina.
            </span>
            <span className="text-center px-12 mb-3">
              Hago piezas textiles únicas con tela, lana y agujas de formas muy
              extrañas, donde las texturas son las principales protagonistas.
            </span>
            <ReadMoreLink href="/hola" color="white">
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-1">
            <div className="flex flex-1 flex-col justify-between bg-black text-white h-50vw md:h-25vw">
              <span className="my-12 mx-12">portfolio</span>
              <ReadMoreLink href="/portfolio" color="white">
                VER MÁS
              </ReadMoreLink>
            </div>
            <div className="flex flex-1 justify-center items-center relative bg-cb-gray text-white py-12 h-50vw md:h-25vw">
              <div className="relative flex-1 h-full m-12">
                <Image
                  src="/images/home_icons_01.svg"
                  layout="fill"
                  objectFit="fill"
                  alt="Bordado"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 hidden md:flex"></div>
        </div>
      </div>

      {/* barbudo */}

      <div
        className="bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: "url(/images/home_barbudo.png)" }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1 h-50vw bg-green-400">
            VIDEOPLACERHOLDER
          </div>
          <div className="flex flex-1 flex-col justify-between bg-cb-green text-black h-50vw md:h-25vw">
            <span className="my-12 mx-12">cursos online de punch needle</span>
            <ReadMoreLink href="/clases" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
          <div className="flex flex-1 justify-center items-center relative bg-black h-50vw md:h-25vw">
            <div className="relative flex-1 h-full">
              <Image
                src="/images/home_punch.svg"
                layout="fill"
                objectFit="cover"
                alt="Bordado"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col h-50vw bg-green-400">
            <div className="flex flex-col justify-between bg-white text-black h-50vw md:h-25vw">
              <span className="my-12 mx-12">
                taller presencial de punch needle
              </span>
              <ReadMoreLink href="/clases" color="black">
                VER MÁS
              </ReadMoreLink>
            </div>
            <div className="flex flex-col justify-between bg-black text-white h-50vw md:h-25vw">
              <span className="my-12 mx-12">prensa</span>
              <ReadMoreLink href="/prensa" color="white">
                VER MÁS
              </ReadMoreLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1 flex-col justify-between bg-cb-gray text-black h-50vw md:h-25vw">
            <span className="my-12 mx-12">¡tu kit de bordado!</span>
            <ReadMoreLink href="/tienda" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
          <div className="hidden md:flex flex-1"></div>
          <div className="hidden md:flex flex-1"></div>
          <div className="hidden md:flex flex-1"></div>
        </div>
      </div>
    </div>
  );
}
