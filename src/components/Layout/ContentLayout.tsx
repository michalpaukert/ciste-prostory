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
        <div className="content-layout__header uk-padding-large">
          <div className="uk-width-1-2@l">
            <h1 className="content-layout__header-text">Čisté prostory</h1>
            <hr className="content-layout__header-hr uk-width-1-4" />
          </div>
          <div className="uk-width-1-2@l">
            <div className="uk-align-center">
              <img className="uk-align-center" src="/images/home-secondary.png" alt="home" />
            </div>
            <div>
            Provadime kompletni dodavky a montaz vzduchotechniky, vzduchotechnickych filtru vcetne filtru atypickych delanych na miru dle potreb zakaznika.
            Dodavky a montaz vsech vzduchotechnickych a klimatizacnich komponentu likvidaci starych a pouzitych filtru.
            Uvedeni zarizeni do provozu vcetne zpracovani prislusnych dokladu pro kolaudaci a naslednou validaci vsechny opravy stavajicich vzduchotechnickych rozvodu a potrubi kompletni poradenskou cinnost ohledne vzduchotechniky.
            </div>
          </div>
        </div>
      </ContentHeader>
      <div className="content-layout content-layout__image" />
      <div className="content-layout">
      </div>
      <main className="uk-flex uk-padding-large">{props.children}</main>
      <Footer />
    </>
  );
};
