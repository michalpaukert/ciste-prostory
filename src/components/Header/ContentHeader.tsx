import React from "react";
import "./Header.scss";
import { Logo, LogoEnum } from "../Logo/Logo";
import { SidebarMenu } from "../Sidebar/SidebarMenu";
import { Navbar } from "./Navbar";
import { useWindowWidth } from "../../hooks/windowSize";

export const ContentHeader: React.FC = (props) => {
  const width = useWindowWidth();
  const logoType = width < 1200 ? LogoEnum.Primary : LogoEnum.Secondary;
  return (
    <div className="header header--secondary">
      <div className="uk-flex">
        <div className="uk-width-1-2@m">
          <Logo variant={logoType} />
        </div>
        <div className="uk-width-1-2@m">
          <Navbar />
          <SidebarMenu />
        </div>
      </div>
      {props.children}
    </div>
  );
};
