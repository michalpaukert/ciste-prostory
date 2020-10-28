import React from "react";
import "./Navbar.scss";
import { Link } from "gatsby";

export const Navbar: React.FC = (props) => (
  <nav
    className="navbar uk-navbar-container uk-navbar-transparent"
    uk-navbar="boundary-align: true; align: center;"
  >
    <div className="uk-navbar-right">
      <div
        className="navbar__menu navbar-collapse uk-flex uk-flex-middle"
        id="navbar_collapse"
      >
        <ul className="uk-navbar-nav uk-visible@s">
          <li>
            <Link className="navbar__menu-item" to="/">
              Úvod
            </Link>
          </li>
          <li>
            <Link
              className="navbar__menu-item navbar__menu-item--rounded"
              to="/"
            >
              Kontakt
            </Link>
          </li>
        </ul>
        <a className="uk-navbar-toggle dis-none h-40" uk-navbar-toggle-icon id="navbar_toggle">
          <div uk-toggle="target: #offcanvas-flip" className="navbar__menu-item uk-navbar-toggle" data-uk-navbar-toggle-icon />
        </a>
      </div>
    </div>
  </nav>
);
