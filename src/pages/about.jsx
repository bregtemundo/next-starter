import React from "react";
import Head from "next/head";
import { Client } from "../../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../../sm-resolver.js";

// i18n
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Styles
import Styles from "./about.module.scss";

// Page Component
const About = (props) => {
  /**
   * i18n:
   */
  //const { t } = useTranslation();

  /**
   * DOM:
   */
  return (
    <>
      <Head>
        <title>{props.data.meta_title}</title>
        <meta name="description" content={props.data.meta_description} />
      </Head>

      <div className={Styles.about}>
        <h1>{"About"} </h1>
        <SliceZone {...props} resolver={resolver} />
      </div>
    </>
  );
};

// Load Translations
/*
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
*/

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: "page",
  apiParams({ params }) {
    return {
      uid: "about" /*params.uid*/,
    };
  },
});

// Track Re-Renders
About.whyDidYouRender = false;

// Export Pure Component
export default React.memo(About);
