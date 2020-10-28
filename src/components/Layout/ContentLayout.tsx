/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Footer } from "../Footer/Footer"
import { SEO } from "../SEO"
import { Header } from "../Header/Header"
import "./Layout.scss"

interface IContentLayoutProps {
  title: string;
}

export const ContentLayout: React.FC<IContentLayoutProps> = (props) => {
  return (
    <>
      <SEO title={props.title} />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
