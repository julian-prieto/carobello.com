import { useState, useEffect } from "react";

import Image from "next/image";
import { Header, Footer, ReadMoreLink, YoutubeVideo } from "components";
import { generateImageSizes } from "utils";

export default function Papu() {
  return (
    <>
      <div className="bg-red-200 h-screen">
        <div className="relative h-screen">
          <Image
            src="/images/home_hola.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            alt="Hola!"
          />
          <div className="absolute top-0 left-0 w-full">
            <Header theme="dark" />
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 flex-col justify-center items-center bg-black text-white text-2xl p-12 md:p-48 h-screen md:h-96">
        <div className="absolute -top-12 md:top-0 right-1/2 md:right-0 transform translate-x-2/4 -translate-y-16 md:-translate-x-full md:-translate-y-1/2">
          <div className="animate-spin-slow">
            <Image src="/images/home_spinner.svg" width={150} height={150} alt="Caro Bello Logo" />
          </div>
        </div>
        <span className="text-center mb-4 font-bold text-4xl text-cb-green">¡HOLA!</span>
        <span className="text-center">Soy Caro Bello, diseñadora y bordadora de punch needle argentina.</span>
        <span className="text-center mb-3">
          Hago piezas textiles únicas con tela, lana y agujas de formas muy extrañas, donde las texturas son
          las principales protagonistas.
        </span>
        <ReadMoreLink href="/hola" color="white">
          VER MÁS
        </ReadMoreLink>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="w-50vw md:w-25vw square">
          <div className="p-12 h-full bg-cb-gray text-white">
            <div className="relative h-full">
              <Image src="/images/home_cross_needles.svg" layout="fill" objectFit="cover" alt="Agujas" />
            </div>
          </div>
        </div>

        <div className="w-50vw md:w-25vw square">
          <div className="flex flex-1 flex-col justify-between bg-white text-black h-50vw md:h-25vw">
            <span className="p-4 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
              portfolio
            </span>
            <ReadMoreLink href="/portfolio" className="m-6 lg:m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>

        <div className="h-50vw md:h-25vw w-100vw md:w-auto col-span-2 relative flex-1">
          <Image
            src="/images/home_barbudo.jpg"
            layout="fill"
            objectFit="cover"
            alt="Bordado Barbudo"
            sizes={generateImageSizes({
              sm: "100vw",
              big: "50vw",
            })}
          />
        </div>

        <div className="h-50vw md:h-25vw w-100vw md:w-auto col-span-2 bg-black">
          <YoutubeVideo youtubeId="oH30hFa2T_g" />
        </div>

        <div className="w-50vw md:w-25vw square flex flex-1 flex-col justify-between bg-cb-green text-black">
          <span className="p-4 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
            mis cursos online de punch needle
          </span>
          <ReadMoreLink href="/cursos" className="m-6 lg:m-12" color="black">
            VER MÁS
          </ReadMoreLink>
        </div>

        <div className="w-50vw md:w-25vw square flex flex-1 flex-col justify-between bg-black text-white">
          <span className="p-4 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
            taller presencial de punch needle
          </span>
          <ReadMoreLink href="/cursos" className="m-6 lg:m-12" color="white">
            VER MÁS
          </ReadMoreLink>
        </div>

        <div className="w-100vw h-50vw md:h-25vw col-span-2 md:col-span-4 relative">
          <Image
            src="/images/home_punch_needle_fan_club.jpg"
            layout="fill"
            objectFit="cover"
            alt="Bordado Punch Needle fan club"
            sizes={generateImageSizes({
              sm: "100vw",
              big: "1920px",
            })}
          />
        </div>

        <div className="w-50vw md:w-25vw square relative h-full">
          <Image src="/images/home_punch.svg" layout="fill" objectFit="cover" alt="PUNCH PUNCH PUNCH" />
        </div>

        <div className="w-50vw md:w-25vw square relative h-full">
          <Image
            src="/images/home_barbudo_byn.svg"
            layout="fill"
            objectFit="cover"
            alt="Bordado Barbudo B&N"
          />
        </div>

        <div className="w-50vw md:w-25vw square flex flex-1 flex-col justify-between bg-cb-gray text-black">
          <span className="p-4 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
            ¡tu kit de bordado!
          </span>
          <ReadMoreLink href="/tienda" className="m-6 lg:m-12" color="black">
            VER MÁS
          </ReadMoreLink>
        </div>

        <div className="w-50vw md:w-25vw square flex flex-1 flex-col justify-between bg-cb-green text-black">
          <span className="p-4 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
            tienda online
          </span>
          <ReadMoreLink href="/tienda" className="m-6 lg:m-12" color="black">
            VER MÁS
          </ReadMoreLink>
        </div>

        <div className="w-50vw md:w-25vw square flex flex-1 flex-col justify-between bg-white text-black">
          <span className="p-4 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
            prensa
          </span>
          <ReadMoreLink href="/prensa" className="m-6 lg:m-12" color="black">
            VER MÁS
          </ReadMoreLink>
        </div>

        <div className="w-50vw md:w-25vw square flex flex-1 flex-col justify-between bg-black text-white">
          <span className="p-4 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
            contacto
          </span>
          <ReadMoreLink href="/contacto" className="m-6 lg:m-12" color="white">
            VER MÁS
          </ReadMoreLink>
        </div>

        <div className="w-50vw md:w-25vw square relative">
          <Image
            src="/images/home_bastidor.jpg"
            layout="fill"
            objectFit="cover"
            alt="Bastidor"
            sizes={generateImageSizes({
              sm: "50vw",
              big: "25vw",
            })}
          />
        </div>

        <div className="w-50vw md:w-25vw square bg-cb-gray text-white relative">
          <Image src="/images/home_icons_01.svg" layout="fill" objectFit="fill" alt="Bordado Iconos" />
        </div>
      </div>
      <Footer />
    </>
  );
}
