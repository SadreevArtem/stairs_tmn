import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Widget', {id: '682074f9f9beb50019de655f', position: 'right', delay: 0, autoOpen: 20})
          `,
          }}
        />
      </body>
    </Html>
  );
}
