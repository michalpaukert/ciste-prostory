import * as React from "react";
import { Layout } from "../components/Layout/Layout";
import { MetaTags } from "../components/metaTags";
import { MainArticle } from "../components/MainArticle";
import { Header } from "../components/Header/Header";
import { graphql } from "gatsby";
import { ICardProps } from "../components/Card/Card";

interface IHomepageProps {
  data: any;
}

export const IndexPage: React.FC<IHomepageProps> = (props) => {
  const itemElements = props.data.kontentItemHomepage.elements;
  const article = itemElements.main_article.value;
  const title = itemElements.title.value;
  const subtitle = itemElements.subtitle.value;
  const cards: ICardProps[] = itemElements.cards.value.map((item: any) => {
    return { text: item.elements.text };
  });

  return (
    <Layout>
      <MetaTags title="Home" />
      <Header cards={cards} subtitle={subtitle} title={title} />
      <MainArticle />
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    kontentItemHomepage(system: { codename: { eq: "home" } }) {
      elements {
        cards {
          value {
            ... on kontent_item_card {
              elements {
                text {
                  value
                }
                title {
                  value
                }
                type {
                  value {
                    codename
                  }
                }
              }
            }
          }
        }
        main_article {
          value
        }
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
  }
`;

export default IndexPage;
