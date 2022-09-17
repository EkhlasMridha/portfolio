import { HtmlHTMLAttributes } from "react";
import "./SlideNavigator.scss";

export const SlideNavigator = (
  props: HtmlHTMLAttributes<HTMLAnchorElement>
) => {
  const { className, children, ...restProps } = props;
  const defaultClass = "navigator-button";
  const classList =
    (className ?? "").length > 0
      ? defaultClass + " " + className
      : defaultClass;
  return (
    <a className={classList} {...restProps}>
      <span>{children}</span>
    </a>
  );
};
