import * as React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import "./Button.scss";

export enum ButtonType {
  Primary,
  Secondary,
}

interface IButtonProps {
  text: string;
  link: string;
  variant: ButtonType;
}

export const Button: React.FC<IButtonProps> = (props) => (
  <Link
    className={classNames(
      "button",
      { "button--primary": props.variant === ButtonType.Primary },
      { "button--secondary": props.variant === ButtonType.Secondary }
    )}
    to={props.link}
  >
    {props.text}
  </Link>
);
