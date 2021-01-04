import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col">
      <div className="flex flex-1 justify-center items-center mt-32 py-8 px-16 bg-black font-regular text-sm">
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4 mr-4"
          href="https://www.instagram.com/porcarobello"
          about="_blank"
        >
          INSTAGRAM
        </a>
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4 mr-4"
          href="https://www.facebook.com/porcarobello"
          about="_blank"
        >
          FACEBOOK
        </a>
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4 mr-4"
          href="https://www.youtube.com/channel/UCZCBCksy3XIiNj4LA0I17dQ"
          about="_blank"
        >
          YOUTUBE
        </a>
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4 mr-4"
          href="https://www.domestika.org/es/carobello"
          about="_blank"
        >
          DOMESTIKA
        </a>
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4 mr-4"
          href="https://www.tiktok.com/@porcarobello?lang=es"
          about="_blank"
        >
          TIK-TOK
        </a>
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4"
          href="https://www.behance.net/porcarobello"
          about="_blank"
        >
          BEHANCE
        </a>
      </div>
      <div className="flex flex-1 justify-center items-center my-8">
        <Image src="/logo_light.svg" width={24} height={24} alt="Caro Bello" />
        <span className="text-black font-regular text-sm ml-4">
          Copyright © 2021 Caro Bello. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
