export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col md:flex-row justify-center items-center mt-32 py-8 px-16 bg-black font-regular text-sm">
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4 md:mr-4"
          href="https://www.instagram.com/porcarobello"
          target="_blank"
        >
          INSTAGRAM
        </a>
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4 md:mr-4"
          href="https://www.facebook.com/porcarobello"
          target="_blank"
        >
          FACEBOOK
        </a>
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4 md:mr-4"
          href="https://www.youtube.com/channel/UCZCBCksy3XIiNj4LA0I17dQ"
          target="_blank"
        >
          YOUTUBE
        </a>
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4 md:mr-4"
          href="https://www.domestika.org/es/carobello"
          target="_blank"
        >
          DOMESTIKA
        </a>
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4 md:mr-4"
          href="https://www.tiktok.com/@porcarobello?lang=es"
          target="_blank"
        >
          TIK-TOK
        </a>
        <a
          className="text-white hover:bg-white hover:text-black py-2 px-4"
          href="https://www.behance.net/porcarobello"
          target="_blank"
        >
          BEHANCE
        </a>
      </div>
      <div className="flex flex-1 flex-col md:flex-row justify-center items-center my-8 px-8">
        <img src="/logo_light.svg" width={24} height={24} alt="Caro Bello" />
        <span className="text-black font-regular text-sm mt-4 mb-2 md:my-0 md:mx-2">
          Copyright © 2021 Caro Bello.
        </span>
        <span className="text-black font-regular text-sm">Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
