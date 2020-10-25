import * as React from "react";
import { Layout } from "../components/layout";
import { MetaTags } from "../components/metaTags";
import { Navbar } from "../components/Header/Navbar";

export const IndexPage: React.FC = () => {
  return (
    <Layout>
      <MetaTags title="Home" />
      <Navbar />
    </Layout>
  );
};

export default IndexPage;
