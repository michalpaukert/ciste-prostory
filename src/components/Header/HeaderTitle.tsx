import React from "react";
import "./HeaderTitle.scss";

interface IHeaderTitle {
  title: string;
  subtitle: string;
}

export const HeaderTitle: React.FC<IHeaderTitle> = (props) => (
  <div className="header-title">
    <h1 className="header-title__heading">{props.title}</h1>
    <h2 className="header-title__subheading">{props.subtitle}</h2>
  </div>
);
