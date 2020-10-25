import { Link } from "gatsby";
import React from "react";
import "./Logo.scss";

export const Logo: React.FC = (props) => (
  <div className="uk-padding uk-padding-small">
    <Link to={"/"}>
      <img src="images/logo_prostory.png" />
    </Link>
  </div>
);
