import * as React from "react";
import { Button, ButtonType } from "./Button/Button";
import "./MainArticle.scss";

interface IMainArticleProps {
  title: string;
  text: string;
}

export const MainArticle: React.FC<IMainArticleProps> = (props) => (
  <div className="main-article uk-container uk-container-small">
    <div className="uk-flex uk-flex-middle">
      <div className="uk-width-1-2  uk-flex uk-flex-center">
        <Button text="Více o nás" link="/" variant={ButtonType.Secondary} />
      </div>
      <div className="uk-width-1-2">
        <h2 className="main-article__heading uk-text-center">{props.title}</h2>
        <div className="main-article__text uk-text-left" dangerouslySetInnerHTML={{__html: props.text}}/>
      </div>
    </div>
  </div>
);
