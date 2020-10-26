import React from "react";
import "./Header.scss";
import { Logo } from "../Logo/Logo";
import { SidebarMenu } from "../Sidebar/SidebarMenu";
import { Cards } from "../Card/Cards";
import { HeaderTitle } from "./HeaderTitle";
import { Navbar } from "./Navbar";

export const Header: React.FC = (props) => (
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

    <HeaderTitle title="S DURAZEM" subtitle="na cistotu" />

    <Cards />
  </div>
);
