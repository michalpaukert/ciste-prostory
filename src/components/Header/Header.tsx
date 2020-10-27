import React from "react";
import "./Header.scss";
import { Logo } from "../Logo/Logo";
import { SidebarMenu } from "../Sidebar/SidebarMenu";
import { Cards } from "../Card/Cards";
import { HeaderTitle } from "./HeaderTitle";
import { Navbar } from "./Navbar";
import { ICardProps } from "../Card/Card";

interface IHeaderProps {
  title: string;
  subtitle: string;
  cards: ICardProps[];
}

export const Header: React.FC<IHeaderProps> = (props) => (
  <div className="header">
    <div className="uk-flex">
      <div className="uk-width-1-2">
        <Logo />
      </div>
      <div className="uk-width-1-2">
        <Navbar />
        <SidebarMenu />
      </div>
    </div>

    <HeaderTitle title={props.title} subtitle={props.subtitle} />

    <Cards cards={props.cards} />
  </div>
);
