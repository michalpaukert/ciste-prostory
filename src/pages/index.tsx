import * as React from "react";
import { Layout } from "../components/Layout/Layout";
import { MetaTags } from "../components/metaTags";
import { Navbar } from "../components/Header/Navbar";
import { MainArticle } from "../components/MainArticle";

export const IndexPage: React.FC = () => {
  return (
    <Layout>
      <MetaTags title="Home" />
      <Navbar />
      <MainArticle />
    </Layout>
  );
};

export default IndexPage;
