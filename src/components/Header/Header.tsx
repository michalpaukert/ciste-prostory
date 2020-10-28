import React from "react";
import "./Header.scss";
import { Logo } from "../Logo/Logo";
import { SidebarMenu } from "../Sidebar/SidebarMenu";
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
    {props.children}
  </div>
);
