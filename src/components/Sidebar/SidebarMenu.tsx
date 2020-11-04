import React from "react";
import "../Card/Card.scss";
import "./SidebarMenu.scss";

export const SidebarMenu: React.FC = (props) => {

  return (
    <div
      id="sidebar"
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
            <a className="sidebar__menu-item uk-hidden@s" href="/">Úvod</a>
          </li>
          <li>
            <a className="sidebar__menu-item uk-hidden@s" href="/kontakt">Kontakt</a>
          </li>
          <li>
            <a className="sidebar__menu-item" href="/">Čisté prostory</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
