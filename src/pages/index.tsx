import * as React from "react";
import { Layout } from "../components/Layout/Layout";
import { MetaTags } from "../components/metaTags";
import { MainArticle } from "../components/MainArticle";
import { Header } from "../components/Header/Header";
import { graphql, useStaticQuery } from "gatsby";

export const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      kontentItemHomepage {
        elements {
          title {
            value
          }
          subtitle {
            value
          }
          main_article {
            modular_content {
              ... on kontent_item_article {
                elements {
                  text {
                    value
                  }
                  title {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const itemElements = data.kontentItemHomepage.elements;
  const title = itemElements.title.value;
  const subtitle = itemElements.subtitle.value;
  const article = itemElements.main_article.modular_content[0].elements;

  return (
    <Layout>
      <MetaTags title="Home" />
      <Header subtitle={subtitle} title={title} />
      <MainArticle text={article.text.value} title={article.title.value} />
    </Layout>
  );
};

export default IndexPage;
