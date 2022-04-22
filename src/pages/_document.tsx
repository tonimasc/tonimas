import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '@/config/stitches.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            rel="preload"
            href="/fonts/Inter-VariableFont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta name="theme-color" content="#FFFFFF"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
