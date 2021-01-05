import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header, Footer } from "components";
import "tailwindcss/tailwind.css";
import "firebase/firestore";
import "firebase/auth";
import { Fuego, FuegoProvider } from "@nandorojo/swr-firestore";
import { ProvideAuth } from "hooks/useAuth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const fuego = new Fuego(firebaseConfig);

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <FuegoProvider fuego={fuego}>
      <ProvideAuth>
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
          <Component {...pageProps} />
          {pathname === "/" ? null : <Footer />}
        </div>
      </ProvideAuth>
    </FuegoProvider>
  );
}
