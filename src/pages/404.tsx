import * as React from "react";
import { Layout } from "../components/Layout/Layout";
import { MetaTags } from "../components/metaTags";

export const NotFoundPage = () => {
  return (
    <Layout>
      <MetaTags title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
