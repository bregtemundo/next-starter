/**
 * function to resolve a type of document to an url
 * used in sitemap.xml and in prismic content
 */
module.exports = linkResolver = (doc) => {  
  const prefix = doc.lang !== "nl-nl" ? `/${doc.lang}` : "";

  if (doc.type === 'home') {
    return `${prefix}/`;
  }
  if (doc.type === "page") {
    return `${prefix}/${doc.uid}`;
  }
  return "/";
};

// Additional helper function for Next/Link component
module.exports = hrefResolver = (doc) => {
  const prefix = doc.lang !== "nl-nl" ? `/${doc.lang}` : "";

  if (doc.type === 'page') {
    return `/${prefix}/${doc.uid}`;
  }
  if (doc.type === 'home') {
    return `/${prefix}`;
  }
  return '/';
}