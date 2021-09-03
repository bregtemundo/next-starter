import Document, { Html, Head, Main, NextScript } from "next/document";

// Custom Document
class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />

          {/** Primary Meta Tags */}
          <meta name="title" content="Next starter" />
          <meta name="description" content="Next starter" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no" />

          {/* preload important font-face */}
          {/* <link rel="preload" href="/assets/fonts/merriweather-v25-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}

          {/** Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://localhost:3001" />
          <meta property="og:title" content="Next starter" />
          <meta property="og:image" content="/assets/images/share.png" />
          <meta property="og:description" content="Next starter" />

          {/** Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="http://localhost:3001" />
          <meta property="twitter:title" content="Next starter" />
          <meta property="twitter:description" content="Next starter" />
          <meta property="twitter:image" content="/assets/images/share.png" />

          {/** Icons and theme color */}
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/icons/favicon-16x16.png" />
          <link rel="manifest" href="/assets/images/icons/site.webmanifest" />
          <link rel="mask-icon" href="/assets/images/icons/safari-pinned-tab.svg" color="#ccff00" />
          <link rel="shortcut icon" href="/assets/images/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ccff00" />
          <meta name="msapplication-config" content="/assets/images/icons/browserconfig.xml" />
          <meta name="theme-color" content="#ccff00" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
