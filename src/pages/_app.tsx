import '@/styles/sass/main.scss';
import { AppProps } from 'next/app';
import { titilliumWeb } from '@/styles/fonts';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/react';
import { UrlChangeListener } from '@/features/ui';
import { SnackbarProvider } from 'notistack';
import { store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Pokédex</title>
      </Head>
      <UrlChangeListener />
      <SnackbarProvider>
        <div className={titilliumWeb.className}>
          <Component {...pageProps} />
        </div>
      </SnackbarProvider>
      <Analytics />
    </Provider>
  );
}
