// i18n
import { appWithTranslation } from "next-i18next";

// Next.js / React
import Head from "next/head";

// React Components
import Main from "components/Main";

// React Contexts
import { SampleProvider } from "contexts/SampleContext";

// Global Styles
import "styles/global";
import Layout from "../components/Layout/index";

import { apiEndpoint } from "../../prismic-configuration"; // import the endpoint name from where it's defined
const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(apiEndpoint)[1]; //Regex to get repo ID

// Custom Application
const CustomApp = ({ Component, pageProps }) => (
  <Main>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />

      {/* preview */}
      <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`} />

      {/** Primary Meta Tags */}
      <meta name="title" content="Next starter" />
      <meta name="description" content="Next starter" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />

      {/* preload important font-face */}
      <link rel="preload" href="/assets/fonts/merriweather-v25-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

      {/** Open Graph / Facebook */}
      <meta property="og:type" key="ogtype" content="website" />
      <meta property="og:url" key="ogurl" content="http://localhost:3001" />
      <meta property="og:title" key="ogtitle" content="Next starter" />
      <meta property="og:image" key="ogimage" content="/assets/images/share.png" />
      <meta property="og:description" key="ogdescription" content="Next starter" />

      {/** Twitter */}
      <meta property="twitter:card" key="twittercard" content="summary_large_image" />
      <meta property="twitter:image" key="twitterimage" content="/assets/images/share.png" />

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

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Main>
);

export default appWithTranslation(CustomApp);
