/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";

interface IMetaProps {
  name: string;
  content: string;
}

interface ISEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: IMetaProps[];
}

export const MetaTags: React.FC<ISEOProps> = ({
  description,
  title,
  lang,
  meta,
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={"Ciste | prostory"}
      link={[
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Staatliches",
        },
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/css/uikit.min.css",
        },
      ]}
      script={[
        {
          src: "https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/js/uikit.min.js",
        },
        {
          src:
            "https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/js/uikit-icons.min.js",
        },
      ]}
    />
  );
};

MetaTags.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
