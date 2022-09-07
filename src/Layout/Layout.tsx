import { HtmlHTMLAttributes } from "react";
import "./Layout.scss";
import { menuItems } from "./navigation.config";
import { Navigation } from "./Navigations/Navigation";

export const Layout = (props: HtmlHTMLAttributes<any>) => {
  return (
    <>
      <Navigation
        items={menuItems}
        className="position-fixed top-0"
        style={{ zIndex: 40 }}
      />
      <main children={props?.children} />
    </>
  );
};
