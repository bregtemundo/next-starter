import React from "react";
import Head from "next/head";
import { Client } from "../../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import resolver from "../../sm-resolver.js";

// Styles
import Styles from "./page.module.scss";

// Page Component
const About = ({ content }) => {
  /**
   * i18n:
   */
  const { t } = useTranslation();

  /**
   * DOM:
   */
  const title = content.data.meta_title;
  const description = content.data.meta_description;
  const ogtitle = content.data.social_card_title ? content.data.social_card_title : title;
  const ogdescription = content.data.social_card_text ? content.data.social_card_text : description;
  const ogimage = content.data.social_card_image.url;
  const twitterimage = content.data.social_card_image.twitter.url ? content.data.social_card_image.twitter.url : ogimage;
  return (
    <>
      <Head>
        {title && <title>{content.data.meta_title}</title>}
        {description && <meta name="description" content={content.data.meta_description} />}

        {ogtitle && <meta property="og:title" key="ogtitle" content={ogtitle} />}
        {ogdescription && <meta property="og:description" key="ogdescription" content={ogdescription} />}
        {ogimage && <meta property="og:image" key="ogimage" content={ogimage} />}

        {twitterimage && <meta property="twitter:image" key="twitterimage" content={twitterimage} />}
      </Head>

      <div className={Styles.about}>
        <SliceZone {...content.data} resolver={resolver} />
      </div>
    </>
  );
};

// Fetch content from prismic (ignore linting useGetStaticProps is not a real react hook : https://github.com/prismicio/slice-machine/issues/131)
/* eslint-disable */
export async function getStaticProps({ params, locale, locales, previewData, preview }) {
  const ref = previewData ? previewData.ref : null;
  const isPreview = preview || false;

  const pagecontent = await Client().getByUID("page", params.uid, { ref, lang: locale });
  const altLangs = pagecontent?.alternate_languages;
  const translations = await serverSideTranslations(locale, ["common"]);

  return {
    props: {
      preview: {
        isActive: isPreview,
        activeRef: ref,
      },
      content: pagecontent,
      altLangs,
      ...translations,
    },
  };
}

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
      locale: prismicDocument.lang,
    };
  },
});

// Track Re-Renders
About.whyDidYouRender = false;

// Export Pure Component
export default React.memo(About);
