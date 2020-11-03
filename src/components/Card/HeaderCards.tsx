import React from "react";
import { Card } from "./Card";
import { graphql, useStaticQuery } from "gatsby";
import { HomeCardsQueryQuery } from "../../../graphql-types";

export const HeaderCards: React.FC = () => {
  const data = useStaticQuery<HomeCardsQueryQuery>(graphql`
    query HomeCardsQuery {
      allKontentItemCard {
        nodes {
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
  `);
  const items = data.allKontentItemCard.nodes;

  return (
    <div className="uk-container uk-container-small">
      <div
        className="uk-grid uk-grid-small"
        uk-height-match="target: > div > .uk-card"
      >
        {items.map((item, key) => {
          const card = item.elements;
          const image = card?.type?.value && card?.type?.value[0]?.codename;
          const title = card?.title?.value || "";
          const text = card?.text?.value || "";
          return (
            <Card
              key={key}
              image={`./images/${image}.png`}
              title={title}
              text={text}
            />
          );
        })}
      </div>
    </div>
  );
};
