import { Html, Head, Main, NextScript } from "next/document";
import {Providers} from "../app/providers";
// import React from "react";

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

        <title>{"<PIN/>"}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <body className="relative w-full">
        <Providers>
          <Main />
          <NextScript />
        </Providers>
      </body>
      <script src="../scripts/index.js"></script>
    </Html>
  );
}
