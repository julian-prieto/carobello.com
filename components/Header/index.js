import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="pt-10 flex justify-center items-center text-xs font-medium tracking-widest z-10">
      <Link href="/hola">
        <a className="mr-8">¡HOLA!</a>
      </Link>
      <Link href="/portfolio">
        <a className="mr-8">PORTFOLIO</a>
      </Link>
      <Link href="/clases">
        <a className="mr-8">CLASES</a>
      </Link>
      <Link href="/">
        <a className="mr-8">
          <Image src="/logo.svg" alt="Logo" width={150} height={150} />
        </a>
      </Link>
      <Link href="/prensa">
        <a className="mr-8">PRENSA</a>
      </Link>
      <Link href="/tienda">
        <a className="mr-8">TIENDA</a>
      </Link>
      <Link href="/contacto">
        <a className="mr-8">CONTACTO</a>
      </Link>
    </div>
  );
}
