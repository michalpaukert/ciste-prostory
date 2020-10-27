import React from "react";
import { Card, ICardProps } from "./Card";

interface ICardsProps {
  cards: ICardProps[];
}

export const Cards: React.FC<ICardsProps> = (props) => (
  <div className="uk-container uk-container-small">
    <div
      className="uk-grid uk-grid-small"
      uk-height-match="target: > div > .uk-card"
    >
      {JSON.stringify(props.cards && props.cards)}
      {props.cards &&
        props.cards.map((card) => {
          <Card
            image={`/images/${card.image}.png`}
            title={card.title}
            text={card.text}
          />;
        })}
    </div>
  </div>
);
