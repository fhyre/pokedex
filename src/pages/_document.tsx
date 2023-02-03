import { Html, Head, Main, NextScript } from "next/document";

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body className="light-theme fade-in">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
