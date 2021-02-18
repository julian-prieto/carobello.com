import { Layout } from "components";
import "tailwindcss/tailwind.css";
import "firebase/firestore";
import "firebase/auth";
import { FuegoProvider } from "@nandorojo/swr-firestore";
import { ProvideAuth } from "hooks/useAuth";
import { Fuego } from "lib/fuego";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

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

export const fuego = new Fuego(firebaseConfig);

export default function MyApp(props) {
  return (
    <FuegoProvider fuego={fuego}>
      <ProvideAuth>
        <Layout {...props} />
      </ProvideAuth>
    </FuegoProvider>
  );
}
