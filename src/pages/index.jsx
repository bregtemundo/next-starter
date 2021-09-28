import React from "react";
import Head from "next/head";
import { Client } from "../../prismic-configuration";

// i18n
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Styles
import Styles from "./index.module.scss";
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

      <div className={Styles["page"]}>
        <Billboard />
        <Products></Products>
      </div>
    </>
  );
};

// Load Translations
export async function getStaticProps({ locale, ref }) {
  const navigation = (await Client().getSingle("menu", { ref, lang: locale })) || null;

  return {
    props: {
      navigation: navigation,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

// Track Re-Renders
Home.whyDidYouRender = false;

// Export Pure Component
export default React.memo(Home);
