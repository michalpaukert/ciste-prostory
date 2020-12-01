import React from "react"
import "./Footer.scss"
import { Contact } from "./Contact"

export const Footer: React.FC = (props) => (
  <div className="footer">
    <div className="footer__image uk-flex uk-flex-center uk-flex-middle">
      <div className="footer__image--cta">
      </div>
    </div>
    <Contact />
  </div>
);
