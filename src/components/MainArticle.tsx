import * as React from "react";
import { Button, ButtonType } from "./Button/Button";
import "./MainArticle.scss";

export const MainArticle: React.FC = () => (
  <div className="main-article uk-container uk-container-small">
    <div className="uk-flex uk-flex-middle">
      <div className="uk-width-1-2  uk-flex uk-flex-center">
        <Button text="Více o nás" link="/" variant={ButtonType.Secondary} />
      </div>
      <div className="uk-width-1-2">
        <h2 className="main-article__heading uk-text-center">Ciste prostory</h2>
        <div className="main-article__text uk-text-left">
          Jsme firma zabyvajici se.... lorem ipsum dolot sit amet. Jsme firma
          zabyvajici se.... lorem ipsum dolot sit amet. Jsme firma zabyvajici
          se.... lorem ipsum dolot sit amet. Jsme firma zabyvajici se.... lorem
          ipsum dolot sit amet. Jsme firma zabyvajici se.... lorem ipsum dolot
          sit amet.
        </div>
      </div>
    </div>
  </div>
);
