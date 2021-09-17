const sm = require("./sm.json");
const linkResolver = require('./prismic-utils');

const SITE_URL = process.env.VERCEL_ENV ? process.env.VERCEL_ENV : process.env.SITE_URL;

module.exports = {
  // the sitemap object is picked up by the package.
  sitemap: {
    linkResolver: linkResolver,
    apiEndpoint: sm.apiEndpoint,
    hostname: SITE_URL,
    optionsMapPerDocumentType: {
      // setting the update date of the article.
      post: (document) => {
        return { 
          // get the last time the document was published in Prismic
          lastmod: document.last_publication_date,
          changefreq: "weekly", 
          priority: 0.8 
        }
      },
      page: { changefreq: "monthly", priority: 1 }
    },
    documentTypes: ['page', 'post']
  }
};
