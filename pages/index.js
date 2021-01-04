import Image from "next/image";
import { ReadMoreLink } from "components";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen -z-10">
      <div
        className="h-screen bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: "url(/images/home_hola.webp)" }}
      />
      <div className="relative flex flex-1 flex-col justify-center items-center bg-black text-white text-2xl p-12 md:p-48 h-screen md:h-96">
        <div className="absolute -top-12 md:top-0 right-1/2 md:right-0 transform translate-x-2/4 -translate-y-16 md:-translate-x-full md:-translate-y-1/2">
          <div className="animate-spin-slow">
            <Image
              src="/images/home_spinner.svg"
              width={150}
              height={150}
              alt="Caro Bello"
            />
          </div>
        </div>
        <span className="text-center mb-4 font-bold text-4xl text-cb-green">
          ¡HOLA!
        </span>
        <span className="text-center">
          Soy Caro Bello, diseñadora y bordadora de punch needle argentina.
        </span>
        <span className="text-center mb-3">
          Hago piezas textiles únicas con tela, lana y agujas de formas muy
          extrañas, donde las texturas son las principales protagonistas.
        </span>
        <ReadMoreLink href="/hola" color="white">
          VER MÁS
        </ReadMoreLink>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 flex-row">
          <div className="flex flex-1 justify-center items-center relative bg-cb-gray text-white py-12 lg:py-24 h-50vw md:h-25vw">
            <div className="relative flex-1 h-full m-12 lg:m-24">
              <Image
                src="/images/home_cross_needles.svg"
                layout="fill"
                objectFit="cover"
                alt="Bordado"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white text-black h-50vw md:h-25vw">
            <span className="m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">
              portfolio
            </span>
            <ReadMoreLink
              href="/portfolio"
              className="m-6 lg:m-12"
              color="black"
            >
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>
        <div className="flex flex-1 relative flex-row">
          <div className="relative flex-1 h-80 md:h-full">
            <Image
              src="/images/home_barbudo.webp"
              layout="fill"
              objectFit="cover"
              alt="Bordado"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 relative flex-row">
          <div className="relative flex-1 h-80 md:h-full">
            <Image
              src="/images/home_video_01.png"
              layout="fill"
              objectFit="cover"
              alt="Bordado"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-row">
          <div className="flex flex-1 flex-col justify-between bg-cb-green text-black h-50vw md:h-25vw">
            <span className="m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">
              mis cursos online de punch needle
            </span>
            <ReadMoreLink href="/cursos" className="m-6 lg:m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-black text-white h-50vw md:h-25vw">
            <span className="m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">
              taller presencial de punch needle
            </span>
            <ReadMoreLink href="/cursos" className="m-6 lg:m-12" color="white">
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-48 md:h-25vw md:flex-row">
        <div className="relative flex-1 md:h-full">
          <Image
            src="/images/home_punch_needle_fan_club.webp"
            layout="fill"
            objectFit="cover"
            alt="Bordado"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-1 flex-row h-50vw md:h-25vw">
          <div className="relative flex-1 h-full">
            <Image
              src="/images/home_punch.svg"
              layout="fill"
              objectFit="cover"
              alt="Bordado"
            />
          </div>
          <div className="relative flex-1 h-full">
            <Image
              src="/images/home_barbudo_byn.svg"
              layout="fill"
              objectFit="cover"
              alt="Bordado"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-row">
          <div className="flex flex-1 flex-col justify-between bg-cb-gray text-black h-50vw md:h-25vw">
            <span className="m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">
              ¡tu kit de bordado!
            </span>
            <ReadMoreLink href="/tienda" className="m-6 lg:m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-cb-green text-black h-50vw md:h-25vw">
            <span className="m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">
              tienda online
            </span>
            <ReadMoreLink href="/tienda" className="m-6 lg:m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 flex-row">
          <div className="flex flex-1 flex-col justify-between bg-cb-white text-black h-50vw md:h-25vw">
            <span className="m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">
              prensa
            </span>
            <ReadMoreLink href="/prensa" className="m-6 lg:m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-black text-white h-50vw md:h-25vw">
            <span className="m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">
              contacto
            </span>
            <ReadMoreLink
              href="/contacto"
              className="m-6 lg:m-12"
              color="white"
            >
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>
        <div className="flex flex-1 flex-row h-50vw md:h-25vw">
          <div className="relative flex-1 h-full">
            <Image
              src="/images/home_bastidor.webp"
              layout="fill"
              objectFit="cover"
              alt="Bordado"
            />
          </div>
          <div className="flex flex-1 justify-center items-center relative bg-cb-gray text-white py-6 lg:py-12 h-50vw md:h-25vw">
            <div className="relative flex-1 h-full m-6 lg:m-12">
              <Image
                src="/images/home_icons_01.svg"
                layout="fill"
                objectFit="fill"
                alt="Bordado"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
