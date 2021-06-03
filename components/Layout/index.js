import Head from "next/head";
import { useRouter } from "next/router";
import { Header, Footer, GoogleLogin } from "components";
import { useAuth } from "hooks/useAuth";

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const { isAdmin } = useAuth();

  return (
    <div className="font-poppins relative">
      <Head>
        <title>Por Caro Bello</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap"
          media="print" onload="this.media='all'" />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap" />
        </noscript>
      </Head>
      <Header theme={pathname === "/" ? "dark" : "light"} />
      {pathname.startsWith("/admin") ? (
        isAdmin === null ? (
          <GoogleLogin />
        ) : isAdmin ? (
          <Component {...pageProps} />
        ) : (
          "¡Fuera de aquí, intruso!"
        )
      ) : (
        <Component {...pageProps} />
      )}
      {pathname === "/" ? null : <Footer />}
    </div>
  );
}
