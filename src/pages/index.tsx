import * as React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Link } from "gatsby";

export const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Link to={"/clanky"}>Clanky</Link>
    </Layout>
  );
};

export default IndexPage;
