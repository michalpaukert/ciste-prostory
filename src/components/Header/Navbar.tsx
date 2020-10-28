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
        <ul className="uk-navbar-nav">
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
          <div uk-toggle="target: #offcanvas-flip">
            <i uk-icon="icon: menu; ratio: 2"></i>
          </div>
        </a>
      </div>
    </div>
  </nav>
);
