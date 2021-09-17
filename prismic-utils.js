/**
 * function to resolve a type of document to an url
 * used in sitemap.xml and in prismic content
 */
module.exports = linkResolver = (doc) => {   
  if (doc.type === 'home') {
    return '/';
  }
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  return "/";
};