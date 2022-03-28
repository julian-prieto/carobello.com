import Head from "next/head";
import Image from "next/image";
import { Header, Footer, ReadMoreLink, YoutubeVideo } from "components";
import { generateImageSizes } from "utils";

export default function Home() {
  return (
    <>
      <Head>
        <title>Caro Bello</title>
      </Head>
      <div className="bg-black h-screen">
        <div className="relative h-screen">
          <Image
            src="/images/home/hola.jpg"
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
            <img src="/images/home/spinner.svg" width={150} height={150} alt="Caro Bello Logo" />
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

      <main className="grid grid-cols-2 md:grid-cols-4">
        <div className="w-50vw md:w-25vw aspect-square">
          <div className="p-12 h-full bg-cb-gray text-white">
            <div className="relative h-full">
              <Image src="/images/home/cross_needles.svg" layout="fill" objectFit="cover" alt="Agujas" />
            </div>
          </div>
        </div>

        <div className="w-50vw md:w-25vw aspect-square">
          <div className="flex flex-1 flex-col justify-between bg-white text-black h-50vw md:h-25vw">
            <span className="p-4 pt-12 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
              bordados
            </span>
            <ReadMoreLink href="/bordados" className="m-6 lg:m-12" color="black">
              VER MÁS
            </ReadMoreLink>
          </div>
        </div>

        <div className="h-50vw md:h-25vw w-100vw md:w-auto col-span-2 relative flex-1 row-start-1 md:row-auto">
          <Image
            src="/images/home/barbudo.jpg"
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
          <YoutubeVideo src="/videos/home_video_preview.mp4" youtubeId="daTAn0jPvmc" />
        </div>

        <div className="w-50vw md:w-25vw aspect-square flex flex-1 flex-col justify-between bg-cb-green text-black">
          <span className="p-4 pt-12 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
            mis cursos online
          </span>
          <ReadMoreLink href="/cursos" className="m-6 lg:m-12" color="black">
            VER MÁS
          </ReadMoreLink>
        </div>

        <div className="w-50vw md:w-25vw aspect-square flex flex-1 flex-col justify-between bg-black text-white">
          <span className="p-4 pt-12 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
            tutoriales de bordado
          </span>
          <ReadMoreLink
            href="https://www.youtube.com/c/PorCaroBello"
            target="_blank"
            rel="noreferrer"
            className="m-6 lg:m-12"
            color="white"
          >
            VER MÁS
          </ReadMoreLink>
        </div>

        <div className="w-100vw h-50vw md:h-25vw col-span-2 md:col-span-4 relative">
          <Image
            src="/images/home/punch_needle_fan_club.jpg"
            layout="fill"
            objectFit="cover"
            alt="Bordado Punch Needle fan club"
            sizes={generateImageSizes({
              sm: "100vw",
              big: "1920px",
            })}
          />
        </div>

        <div className="w-50vw md:w-25vw aspect-square relative h-full">
          <Image src="/images/home/punch.svg" layout="fill" objectFit="cover" alt="PUNCH PUNCH PUNCH" />
        </div>

        <div className="w-50vw md:w-25vw aspect-square relative h-full">
          <Image
            src="/images/home/barbudo_byn.svg"
            layout="fill"
            objectFit="cover"
            alt="Bordado Barbudo B&N"
          />
        </div>

        <div className="w-50vw md:w-25vw aspect-square flex flex-1 flex-col justify-between bg-cb-gray text-black">
          <span className="p-4 pt-12 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
            prensa
          </span>
          <ReadMoreLink href="/prensa" className="m-6 lg:m-12" color="black">
            VER MÁS
          </ReadMoreLink>
        </div>

        <div className="w-50vw md:w-25vw aspect-square flex flex-1 flex-col justify-between bg-cb-green text-black">
          <span className="p-4 pt-12 text-2xl md:pt-6 md:text-xl lg:pt-8 lg:text-2xl xl:text-4xl leading-none">
            tienda online
          </span>
          <ReadMoreLink href="/tienda" className="m-6 lg:m-12" color="black">
            VER MÁS
          </ReadMoreLink>
        </div>

        <div className="h-50vw md:h-25vw w-100vw md:w-auto col-span-2 bg-black">
          <YoutubeVideo src="/videos/home_video_preview_2.mp4" youtubeId="BsiNklAmX2w" />
        </div>

        <div className="w-50vw md:w-25vw aspect-square relative">
          <Image
            src="/images/home/bastidor.jpg"
            layout="fill"
            objectFit="cover"
            alt="Bastidor"
            sizes={generateImageSizes({
              sm: "50vw",
              big: "25vw",
            })}
          />
        </div>

        <div className="w-50vw md:w-25vw aspect-square">
          <div className="p-4 md:p-12 h-full bg-cb-gray text-white">
            <div className="relative h-full">
              <Image src="/images/home/icons_01.svg" layout="fill" objectFit="cover" alt="Bordado Iconos" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
