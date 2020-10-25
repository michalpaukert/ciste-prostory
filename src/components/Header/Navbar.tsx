import React from "react";
import "./Navbar.scss";
import { Logo } from "../Logo/Logo";
import { SidebarMenu } from "../sidebar-menu";
import { Link } from "gatsby";
import { Cards } from "../Card/Cards";
import { HeaderTitle } from "./HeaderTitle";

export const Navbar: React.FC = (props) => (
  <div className="navbar">
    <div className="uk-flex">
      <div className="uk-width-1-2">
        <Logo />
      </div>
      <div className="uk-width-1-2">
        <div className="uk-flex uk-flex-right">
          <div className="uk-flex uk-padding uk-padding-small">
            <div className="uk-padding uk-padding-small">
              <Link className="navbar__menu" to="/">
                Uvod
              </Link>
            </div>

            <div className="uk-padding uk-padding-small">
              <Link className="navbar__menu navbar__menu--contact" to="/">
                Kontakt
              </Link>
            </div>

            <div className="uk-padding uk-padding-small">
              <div
                className="uk-button uk-button-default"
                uk-toggle="target: #offcanvas-flip"
              >
                <div className="navbar__burger-menu" />
              </div>
            </div>
          </div>
        </div>
        <SidebarMenu />
      </div>
    </div>

    <HeaderTitle title="S DURAZEM" subtitle="na cistotu" />

    <Cards />
  </div>
);
