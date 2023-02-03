import "@/assets/globals.scss";
import { AppProps } from "next/app";
import { robotoFlex } from "@/assets/fonts";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>PokeDex</title>
      </Head>
      <div className={robotoFlex.className}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
