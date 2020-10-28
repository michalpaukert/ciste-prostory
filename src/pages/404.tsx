import * as React from "react"
import { SEO } from "../components/SEO"
import { ContentLayout } from "../components/Layout/ContentLayout"

export const NotFoundPage = () => {
  return (
    <ContentLayout title="Not found">
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ContentLayout>
  );
};

export default NotFoundPage;
