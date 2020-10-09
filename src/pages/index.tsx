import * as React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      Home
    </Layout>
  );
};
