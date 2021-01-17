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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header theme={pathname === "/" ? "dark" : "light"} />
      {pathname.startsWith("/admin") && isAdmin ? (
        <Component {...pageProps} />
      ) : isAdmin === null ? (
        <GoogleLogin />
      ) : (
        "¡Fuera de aquí, intruso!"
      )}
      {/* <Component {...pageProps} /> */}
      {pathname === "/" ? null : <Footer />}
    </div>
  );
}
