import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="<PIN/> - Undergruppe av Root linjeforeningen i HVL"
        />
        <meta
          name="keywords"
          content="PIN, root, HVL, HVL data, HVL IT, PIN nettside"
        />

        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
