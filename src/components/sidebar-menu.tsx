import React from "react";
import "./header-card.scss";

export const SidebarMenu: React.FC = (props) => (
  <div
    id="offcanvas-flip"
    uk-offcanvas="flip: true; overlay: true"
    className="uk-offcanvas"
  >
    <div className="uk-offcanvas-bar">
      <img src="img/logo_prostory.png" />
      <br />
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

      <a href="ciste-prostory.html">Ciste prostory</a>
    </div>
  </div>
);
