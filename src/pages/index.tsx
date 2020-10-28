import * as React from "react"
import { MainArticle } from "../components/MainArticle"
import { graphql, useStaticQuery } from "gatsby"
import { MainLayout } from "../components/Layout/MainLayout"

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
            value {
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
  const article = itemElements.main_article.value[0].elements;

  return (
    <MainLayout
      title="Home"
      heading={title}
      subheading={subtitle}
    >
      <MainArticle text={article.text.value} title={article.title.value} />
    </MainLayout>
  );
};

export default IndexPage;
