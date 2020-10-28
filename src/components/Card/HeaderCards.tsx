import React from "react";
import { Card } from "./Card";
import { graphql, useStaticQuery } from "gatsby";

export const HeaderCards: React.FC = () => {
  const data = useStaticQuery(graphql`
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
        {items.map((item: any, key: number) => {
          const card = item.elements;
          return (
            <Card
              key={key}
              image={`./images/${card.type.value[0].codename}.png`}
              title={card.title.value}
              text={card.text.value}
            />
          );
        })}
      </div>
    </div>
  );
};
