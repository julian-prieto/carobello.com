import Head from "next/head";
import { useRouter } from "next/router";
import { Header, Footer } from "components";

export default function MyApp({ children }) {
  const { pathname } = useRouter();
  const isHome = pathname === "/" || pathname === "/papu";

  return (
    <div className="font-poppins relative">
      <Head>
        <title>Por Caro Bello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isHome ? null : <Header theme="light" />}
      {children}
      {isHome ? null : <Footer />}
    </div>
  );
}
