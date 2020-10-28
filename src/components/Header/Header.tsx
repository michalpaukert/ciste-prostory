import React from "react";
import "./Header.scss";
import { Logo } from "../Logo/Logo";
import { SidebarMenu } from "../Sidebar/SidebarMenu";
import { HeaderCards } from "../Card/HeaderCards";
import { HeaderTitle } from "./HeaderTitle";
import { Navbar } from "./Navbar";

interface IHeaderProps {
  title: string;
  subtitle: string;
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

    <HeaderCards />
  </div>
);
