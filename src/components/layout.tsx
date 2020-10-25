/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import "./layout.scss";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
