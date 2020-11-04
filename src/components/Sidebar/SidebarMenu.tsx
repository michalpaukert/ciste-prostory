import React from "react";
import "../Card/Card.scss";
import { Link } from "gatsby";
import "./SidebarMenu.scss";
import UIkit from "uikit";

export const SidebarMenu: React.FC = (props) => {

  const closeSidebar = () => {
    // @ts-ignore
    UIkit.offcanvas.hide();
  }

  return (
    <div
      id="offcanvas-flip"
      uk-offcanvas="flip: true; overlay: true"
      className="sidebar uk-offcanvas"
    >
      <div className="uk-offcanvas-bar">
        <img src="/images/logo-primary.png" />
        <button
          className="uk-offcanvas-close uk-icon uk-close"
          type="button"
          uk-close="true"
        />

        <ul className="sidebar__menu uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li>
            <Link className="sidebar__menu-item uk-hidden@s" to="/" onClick={closeSidebar}>Úvod</Link>
          </li>
          <li>
            <Link className="sidebar__menu-item uk-hidden@s" to="/kontakt" onClick={closeSidebar}>Kontakt</Link>
          </li>
          <li>
            <Link className="sidebar__menu-item" to="/" onClick={closeSidebar}>Ciste prostory</Link>
          </li>
          <li>
            <Link className="sidebar__menu-item" to="/" onClick={closeSidebar}>Ciste prostory</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
