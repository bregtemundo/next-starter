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

// Custom Application
const CustomApp = ({ Component, pageProps }) => (
  <Main>
    <Head></Head>

    <SampleProvider>
      <Component {...pageProps} />
    </SampleProvider>
  </Main>
);

export default appWithTranslation(CustomApp);
