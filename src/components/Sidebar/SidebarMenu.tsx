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
        uk-close=""
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
          data-svg="close-icon"
        >
          <line
            fill="none"
            stroke="#000"
            strokeWidth="1.1"
            x1="1"
            y1="1"
            x2="13"
            y2="13"
          ></line>
          <line
            fill="none"
            stroke="#000"
            strokeWidth="1.1"
            x1="13"
            y1="1"
            x2="1"
            y2="13"
          ></line>
        </svg>
      </button>

      <ul className="sidebar__menu uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
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
