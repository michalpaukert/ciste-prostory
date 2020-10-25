import * as React from "react";
import { Layout } from "../components/layout";
import { MetaTags } from "../components/metaTags";
import { Navbar } from "../components/Header/Navbar";
import { Link } from "gatsby";

export const IndexPage: React.FC = () => {
  return (
    <Layout>
      <MetaTags title="Home" />
      <Navbar />
      <div className="main-article uk-container uk-container-small">
        <div className="uk-flex uk-flex-middle">
          <div className="uk-width-1-2  uk-flex uk-flex-center">
            <Link to="/" className="uk-button about-us">
              Více o nás
            </Link>
          </div>
          <div className="uk-width-1-2">
            <div className="main-article__heading uk-text-center">
              Ciste prostory
            </div>
            <div className="main-article__text uk-text-left">
              Jsme firma zabyvajici se.... lorem ipsum dolot sit amet. Jsme
              firma zabyvajici se.... lorem ipsum dolot sit amet. Jsme firma
              zabyvajici se.... lorem ipsum dolot sit amet. Jsme firma
              zabyvajici se.... lorem ipsum dolot sit amet. Jsme firma
              zabyvajici se.... lorem ipsum dolot sit amet.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
