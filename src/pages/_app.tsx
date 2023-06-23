import "@/assets/globals.scss";
import { AppProps } from "next/app";
import { robotoFlex } from "@/assets/fonts";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Pokédex</title>
      </Head>
      <div className={robotoFlex.className}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </Provider>
  );
}
