import Head from "next/head";
import { Header } from "components";
import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="font-poppins relative">
      <Head>
        <title>Por Caro Bello</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
