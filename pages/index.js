import Image from "next/image";
import { ReadMoreLink } from "components";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen -z-10">
      <div
        className="h-screen bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: "url(/images/home_hola.png)" }}
      />
      <div className="">
        <div className="flex flex-1 flex-col justify-center items-center bg-black text-white p-16 h-96">
          <span className="text-center mb-4 font-bold text-3xl text-cb-green">
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
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 flex-row">
          <div className="flex flex-1 justify-center items-center relative bg-cb-gray text-white py-12 md:py-24 h-50vw md:h-25vw">
            <div className="relative flex-1 h-full m-12 md:m-24">
              <Image
                src="/images/home_cross_needles.svg"
                layout="fill"
                objectFit="cover"
                alt="Bordado"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white text-black h-50vw md:h-25vw">
            <span className="m-12 text-xl">portfolio</span>
            <ReadMoreLink href="/portfolio" className="m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>
        <div className="flex flex-1 relative flex-row">
          <div className="relative flex-1 h-80 md:h-full">
            <Image
              src="/images/home_barbudo.png"
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
            <span className="m-12 text-xl">
              mis cursos online de punch needle
            </span>
            <ReadMoreLink href="/cursos" className="m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-black text-white h-50vw md:h-25vw">
            <span className="m-12 text-xl">
              taller presencial de punch needle
            </span>
            <ReadMoreLink href="/cursos" className="m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-48 md:h-96 md:flex-row">
        <div className="relative flex-1 md:h-full">
          <Image
            src="/images/home_punch_needle_fan_club.png"
            layout="fill"
            objectFit="cover"
            alt="Bordado"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
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
            <span className="m-12 text-xl">¡tu kit de bordado!</span>
            <ReadMoreLink href="/tienda" className="m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white text-black h-50vw md:h-25vw">
            <span className="m-12 text-xl">tienda online</span>
            <ReadMoreLink href="/tienda" className="m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 flex-row">
          <div className="flex flex-1 flex-col justify-between bg-cb-gray text-black h-50vw md:h-25vw">
            <span className="m-12 text-xl">prensa</span>
            <ReadMoreLink href="/prensa" className="m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-black text-white h-50vw md:h-25vw">
            <span className="m-12 text-xl">contacto</span>
            <ReadMoreLink href="/contacto" className="m-12" color="white">
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>
        <div className="flex flex-1 flex-row h-50vw md:h-25vw">
          <div className="relative flex-1 h-full">
            <Image
              src="/images/home_bastidor.png"
              layout="fill"
              objectFit="cover"
              alt="Bordado"
            />
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
      </div>
    </div>
  );
}
