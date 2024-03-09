import { Barlow, Inter, Nunito, Titillium_Web } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
});

export const nunito = Nunito({
  subsets: ['latin'],
});

export const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
});
