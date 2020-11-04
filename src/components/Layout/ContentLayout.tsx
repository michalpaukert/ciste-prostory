/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Footer } from "../Footer/Footer";
import { SEO } from "../SEO";
import "./Layout.scss";
import "./Text.scss";
import { ContentHeader } from "../Header/ContentHeader";

interface IContentLayoutProps {
  title: string;
}

export const ContentLayout: React.FC<IContentLayoutProps> = (props) => {
  return (
    <>
      <SEO title={props.title} />
      <ContentHeader>
        <div className="uk-container uk-flex">
          <div className="uk-width-1-2">
            <h1 className="text--primary">Ciste prostory</h1>
            <hr />
          </div>
          <div className="uk-width-1-2">
          </div>
        </div>
        <div className="content-layout content-layout__image" />
        <div className="content-layout">
          Tady je text
        </div>
      </ContentHeader>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
