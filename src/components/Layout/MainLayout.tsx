/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Footer } from "../Footer/Footer";
import { SEO } from "../SEO";
import { Header } from "../Header/Header";
import { HeaderTitle } from "../Header/HeaderTitle";
import "./Layout.scss";
import { HeaderCards } from "../Card/HeaderCards";

interface IMainLayoutProps {
  title: string;
  heading: string;
  subheading: string;
}

export const MainLayout: React.FC<IMainLayoutProps> = (props) => {
  return (
    <>
      <SEO title={props.title} />
      <Header>
        <>
          <HeaderTitle title={props.heading} subtitle={props.subheading} />
          <HeaderCards />
        </>
      </Header>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
