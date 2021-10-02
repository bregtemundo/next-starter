import React from "react";
import Head from "next/head";

import Storyblok, { useStoryblok } from "../../storyblok";
import DynamicComponent from "../components/DynamicComponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// Styles
import Styles from "./page.module.scss";

// Page Component
const About = ({ story }) => {
  /**
   * i18n:
   */
  const { t } = useTranslation();

  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode
  story = useStoryblok(story, enableBridge);

  /**
   * DOM:
   */

  const title = story.content.seo?.title;
  const description = story.content.seo?.description;
  const ogtitle = story.content.seo?.og_title ? story.content.seo?.og_title : title;
  const ogdescription = story.content.seo?.og_description ? story.content.seo?.og_description : description;
  const ogimage = story.content.seo?.og_image;
  const twitterimage = story.content.seo?.twitter_image ? story.content.seo?.twitter_image : ogimage;

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}

        {ogtitle && <meta property="og:title" key="ogtitle" content={ogtitle} />}
        {ogdescription && <meta property="og:description" key="ogdescription" content={ogdescription} />}
        {ogimage && <meta property="og:image" key="ogimage" content={ogimage} />}

        {twitterimage && <meta property="twitter:image" key="twitterimage" content={twitterimage} />}
      </Head>

      <div className={Styles.about}>
        <DynamicComponent blok={story?.content} />
      </div>
    </>
  );
};

export async function getStaticProps({ params, locale, locales, previewData, preview = false }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "published",
    resolve_links: "url",
    language: locale,
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  // load the stories insides the pages folder
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);
  let altLangs = data.story.translated_slugs;

  let settings = await Storyblok.get(`cdn/stories/settings`, sbParams);
  const navigation = settings.data.story.content.navigation;

  const translations = await serverSideTranslations(locale, ["common"]);

  return {
    props: {
      story: data ? data.story : null,
      preview,
      navigation: navigation,
      altLangs: altLangs,
      ...translations,
    },
    //revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths({ locales }) {
  let { data } = await Storyblok.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    if (slug === "home") return false;

    // create additional languages
    for (const locale of locales) {
      const alternate = data.links[linkKey].alternates.find((l) => l.lang == locale);
      const alternateSlug = alternate ? alternate.path : slug;

      let splittedSlug = alternateSlug.split("/");
      paths.push({ params: { slug: splittedSlug }, locale });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}

// Track Re-Renders
About.whyDidYouRender = false;

// Export Pure Component
export default React.memo(About);
