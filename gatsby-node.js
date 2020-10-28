/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`);
const Articles = path.resolve(`src/views/articles.tsx`);
const Contact = path.resolve(`src/views/contact.tsx`);

exports.createPages = ({ graphql, actions }) => {
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const { createPage } = actions;
  createPage({
    path: "/clanky",
    component: Articles,
    context: {},
  });

  createPage({
    path: "/kontakt",
    component: ContactPage,
    context: {},
  });
};
