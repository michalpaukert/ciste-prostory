import React from "react";
import "./header-card.scss";

interface IHeaderTitle {
  title: string;
  subtitle: string;
}

export const HeaderTitle: React.FC<IHeaderTitle> = (props) => (
  <div className="page-title">
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
);
