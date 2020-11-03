import React from "react";
import "./Header.scss";
import { Logo, LogoEnum } from "../Logo/Logo";
import { SidebarMenu } from "../Sidebar/SidebarMenu";
import { Navbar } from "./Navbar";

export const ContentHeader: React.FC = (props) => (
  <div className="header--secondary">
    <div className="uk-flex">
      <div className="uk-width-1-2">
        <Logo variant={LogoEnum.Secondary} />
      </div>
      <div className="uk-width-1-2">
        <Navbar />
        <SidebarMenu />
      </div>
    </div>
    {props.children}
  </div>
);
