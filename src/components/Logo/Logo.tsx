import { Link } from "gatsby";
import React from "react";
import "./Logo.scss";

export enum LogoEnum {
  Primary,
  Secondary
}

interface ILogoProps {
  variant: LogoEnum;
}

export const Logo: React.FC<ILogoProps> = (props) => {
  const logoUrl = props.variant === LogoEnum.Primary ? "/images/logo-primary.png" : "/images/logo-secondary.png";

  return (
    <div className="uk-padding uk-padding-small">
      <Link to={"/"}>
        <img src={logoUrl} alt="logo" />
      </Link>
    </div>
  );
};
