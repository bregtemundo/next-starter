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
  const title = props.data.meta_title;
  const description = props.data.meta_description;
  const ogtitle = props.data.social_card_title ? props.data.social_card_title : title;
  const ogdescription = props.data.social_card_text ? props.data.social_card_text : description;
  const ogimage = props.data.social_card_image.url;
  const twitterimage = props.data.social_card_image.twitter.url ? props.data.social_card_image.twitter.url : ogimage;
  return (
    <>
      <Head>
        {title && <title>{props.data.meta_title}</title>}
        {description && <meta name="description" content={props.data.meta_description} />}

        {ogtitle && <meta property="og:title" key="ogtitle" content={ogtitle} />}
        {ogdescription && <meta property="og:description" key="ogdescription" content={ogdescription} />}
        {ogimage && <meta property="og:image" key="ogimage" content={ogimage} />}

        {twitterimage && <meta property="twitter:image" key="twitterimage" content={twitterimage} />}
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

// Fetch content from prismic (ignore linting useGetStaticProps is not a real react hook : https://github.com/prismicio/slice-machine/issues/131)
/* eslint-disable */
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: "page",
  apiParams({ params }) {
    return {
      uid: params.uid,
    };
  },
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    };
  },
});

// Track Re-Renders
About.whyDidYouRender = false;

// Export Pure Component
export default React.memo(About);
