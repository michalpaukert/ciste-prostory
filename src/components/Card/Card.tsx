import React from "react";
import "./Card.scss";

export interface ICardProps {
  image: string;
  title: string;
  text: string;
}

export const Card: React.FC<ICardProps> = (props) => (
  <div className="uk-width-1-2@s uk-width-1-3@m">
    <div className="card uk-card uk-card-default uk-text-center">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <span>{props.text}</span>
    </div>
  </div>
);
