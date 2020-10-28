import React from "react";
import "../Card/Card.scss";
import { Link } from "gatsby";
import "./SidebarMenu.scss";

export const SidebarMenu: React.FC = (props) => (
  <div
    id="offcanvas-flip"
    uk-offcanvas="flip: true; overlay: true"
    className="sidebar uk-offcanvas"
  >
    <div className="uk-offcanvas-bar">
      <img src="images/logo_prostory.png" />
      <button
        className="uk-offcanvas-close uk-icon uk-close"
        type="button"
        uk-close
      />

      <ul className="sidebar__menu uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
        <li>
          <Link className="sidebar__menu-item uk-hidden@s" to="/">Úvod</Link>
        </li>
        <li>
          <Link className="sidebar__menu-item uk-hidden@s" to="/">Kontakt</Link>
        </li>
        <li>
          <Link className="sidebar__menu-item" to="/">Ciste prostory</Link>
        </li>
        <li>
          <Link className="sidebar__menu-item" to="/">Ciste prostory</Link>
        </li>
      </ul>
    </div>
  </div>
);
