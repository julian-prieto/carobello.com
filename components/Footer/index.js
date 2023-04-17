const LINKS = [
  {
    url: "https://www.instagram.com/porcarobello",
    name: "INSTAGRAM",
  },
  {
    url: "https://www.facebook.com/porcarobello",
    name: "FACEBOOK",
  },
  {
    url: "https://www.youtube.com/c/PorCaroBello",
    name: "YOUTUBE",
  },
  {
    url: "https://www.domestika.org/es/carobello",
    name: "DOMESTIKA",
  },
  {
    url: "https://www.tiktok.com/@porcarobello?lang=es",
    name: "TIK-TOK",
  },
  {
    url: "https://www.behance.net/porcarobello",
    name: "BEHANCE",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col md:flex-row justify-center items-center mt-32 py-8 px-16 bg-black font-regular text-sm">
        {LINKS.map((link) => (
          <a
            key={link.name}
            className="text-white hover:bg-white hover:text-black py-2 px-4 md:mr-4"
            href={link.url}
            target="_blank"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex flex-1 flex-col md:flex-row justify-center items-center my-8 px-8">
        <img src="/logo_light.svg" width={24} height={24} alt="Caro Bello" />
        <span className="text-black font-regular text-sm mt-4 mb-2 md:my-0 md:mx-2">
          Copyright © 2023 Caro Bello.
        </span>
        <span className="text-black font-regular text-sm">Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
