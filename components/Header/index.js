import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="pt-10 flex justify-center items-center text-xs font-medium tracking-widest z-10">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Link href="/hola">
          <a className="md:mr-8">¡HOLA!</a>
        </Link>
        <Link href="/portfolio">
          <a className="mt-3 md:mt-0 md:mr-8">PORTFOLIO</a>
        </Link>
        <Link href="/clases">
          <a className="mt-3 md:mt-0 md:mr-8">CLASES</a>
        </Link>
      </div>
      <Link href="/">
        <a className="mx-8 md:mx-0">
          <Image src="/logo.svg" alt="Logo" width={150} height={150} />
        </a>
      </Link>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Link href="/prensa">
          <a className="md:ml-8">PRENSA</a>
        </Link>
        <Link href="/tienda">
          <a className="mt-3 md:mt-0 md:ml-8">TIENDA</a>
        </Link>
        <Link href="/contacto">
          <a className="mt-3 md:mt-0 md:ml-8">CONTACTO</a>
        </Link>
      </div>
    </div>
  );
}
