import * as React from "react";
import { Layout } from "../components/Layout/Layout";
import { MetaTags } from "../components/metaTags";
import { MainArticle } from "../components/MainArticle";
import { Header } from "../components/Header/Header";

export const IndexPage: React.FC = () => {
  return (
    <Layout>
      <MetaTags title="Home" />
      <Header />
      <MainArticle />
    </Layout>
  );
};

export default IndexPage;
