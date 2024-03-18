import '@/styles/sass/main.scss';
import { AppProps } from 'next/app';
import { titilliumWeb } from '@/styles/fonts';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Analytics } from '@vercel/analytics/react';
import { UrlChangeListener } from '@/features/ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Pokédex</title>
      </Head>
      <UrlChangeListener />
      <div className={titilliumWeb.className}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </Provider>
  );
}
