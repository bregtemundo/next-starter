import React from "react";
import Head from "next/head";

// i18n
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Styles
import Styles from "./about.module.scss";
import Billboard from "../components/Billboard/Billboard";
import Products from "../components/Products";

// Page Component
const Home = () => {
  /**
   * i18n:
   */
  const { t } = useTranslation();

  /**
   * DOM:
   */
  return (
    <>
      <Head>
        <title>Home | Prismic</title>
        <meta name="description" content="home desciption" />
      </Head>

      <div className={Styles.about}>
        <h1>{t("About")} </h1>
      </div>
    </>
  );
};

// Load Translations
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

// Track Re-Renders
Home.whyDidYouRender = false;

// Export Pure Component
export default React.memo(Home);
