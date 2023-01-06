import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '@project44-manifest/react';

class MyDocument extends Document {
  override render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link href="/images/favicon.png" rel="icon" />
          <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: getCssText() }} id="stitches" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
