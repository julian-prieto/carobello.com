import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavigation = () => setIsOpen((prevState) => !prevState);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <nav className="py-2 md:py-10 px-8 flex justify-between md:justify-center items-center text-xs font-medium tracking-widest z-1">
      <div className="hidden md:flex text-white">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Link href="/hola">
            <a className="md:mr-8">¡HOLA!</a>
          </Link>
          <Link href="/portfolio">
            <a className="mt-3 md:mt-0 md:mr-8">PORTFOLIO</a>
          </Link>
          <Link href="/prensa">
            <a className="mt-3 md:mt-0 md:mr-8">PRENSA</a>
          </Link>
        </div>
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </a>
        </Link>
        <div className="hidden md:flex flex-col md:flex-row justify-center items-center">
          <Link href="/clases">
            <a className="md:ml-8">CLASES</a>
          </Link>
          <Link href="/tienda">
            <a className="mt-3 md:mt-0 md:ml-8">TIENDA</a>
          </Link>
          <Link href="/contacto">
            <a className="mt-3 md:mt-0 md:ml-8">CONTACTO</a>
          </Link>
        </div>
      </div>

      <div className="flex flex-1 md:hidden justify-between">
        <Link href="/">
          <a className="mt-4">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          </a>
        </Link>
        <button
          className="text-white focus:outline-none"
          onClick={toggleNavigation}
        >
          <svg
            className="fill-current h-8 w-8"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`bg-white absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-stretch ${
          isOpen ? "" : "hidden"
        }`}
      >
        <button
          className="absolute top-8 right-8 text-black focus:outline-none"
          onClick={toggleNavigation}
        >
          <svg
            className="fill-current h-8 w-8"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
							c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
							c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
							c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
            />
          </svg>
        </button>
        <ul className="list-reset flex flex-1 flex-col justify-center items-center text-4xl text-black">
          <li className="mb-4">
            <Link href="/">
              <a>INICIO</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/hola">
              <a>¡HOLA!</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/portfolio">
              <a>PORTFOLIO</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/prensa">
              <a>PRENSA</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/clases">
              <a>CLASES</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/tienda">
              <a>TIENDA</a>
            </Link>
          </li>
          <li>
            <Link href="/contacto">
              <a>CONTACTO</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
