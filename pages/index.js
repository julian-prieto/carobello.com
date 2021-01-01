import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 bg-cover bg-center w-full min-h-screen -z-10 pt-h-full" style={{ backgroundImage: "url(https://via.placeholder.com/1600x1900)" }}>
      <div className="flex">
        <div className="hidden md:flex flex-1"></div>
        <Link href="/hola">
          <div className="flex flex-1 flex-col justify-center items-center bg-black text-white cursor-pointer py-12 md:h-25vw">
            <span className="text-center mb-4 px-12 font-bold text-3xl">¡HOLA!</span>
            <span className="text-center px-12">Soy Caro Bello, diseñadora y bordadora de punch needle argentina.</span>
            <span className="text-center px-12 mb-3">Hago piezas textiles únicas con tela, lana y agujas de formas muy extrañas, donde las texturas son las principales protagonistas.</span>
            <a className="text-xs font-medium">&#8594; VER MÁS</a>
          </div>
        </Link>
      </div>
      <div className="flex">
        <div className="flex flex-1">
          <div className="flex flex-1 justify-center items-center bg-purple-300 text-white py-12 h-50vw md:h-25vw">Carito 1</div>
          <div className="flex flex-1 justify-center items-center bg-yellow-300 text-white py-12 h-50vw md:h-25vw">Carito 2</div>
        </div>
        <div className="flex-1 hidden md:flex"></div>
      </div>
    </div>
  );
}
