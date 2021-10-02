import React from "react";
import Head from "next/head";

import Storyblok, { useStoryblok } from "../../storyblok";

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
        <title>Home | Storyblok</title>
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
export async function getStaticProps({ locale, ref, preview }) {
  let slug = "home";

  let sbParams = {
    version: "published",
    resolve_links: "url",
    language: locale,
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let settings = await Storyblok.get(`cdn/stories/settings`, sbParams);
  const navigation = settings.data.story.content.navigation || null;

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
