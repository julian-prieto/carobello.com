import Image from "next/image";

const links = [
  {
    href: "https://www.domestika.org/es/courses/747-bordado-xl-con-aguja-magica/carobello",
    text: "Curso 1: Bordado XL con aguja mágica",
    icon: "school",
  },
  {
    href: "https://www.domestika.org/es/courses/1716-diseno-y-bordado-de-munecos-con-aguja-magica/carobello",
    text: "Curso 2: Diseño y bordado de muñecos con aguja mágica",
    icon: "school",
  },
  { href: "https://www.youtube.com/c/PorCaroBello", text: "Mi canal de YouTube", icon: "videocam" },
  { href: "https://www.instagram.com/porcarobello", text: "Mi Instagram", icon: "photo_camera" },
];

export default function Home() {
  return (
    <div className="mt-4 relative flex flex-col items-center justify-center px-8 space-y-8">
      <Image src="/logo_home.svg" width={300} height={300} alt="Caro Bello" />
      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.text}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="w-full flex justify-start items-center px-2 md:px-8 py-4
          bg-black hover:bg-white border-transparent border-2 hover:border-black text-white hover:text-black text-center"
          >
            <div className="flex-1 text-center px-4">{link.text}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
