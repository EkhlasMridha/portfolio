import { HtmlHTMLAttributes } from "react";
import { getMenuItems } from "./navigation.config";
import { Navigation } from "./Navigations/Navigation";

export const Layout = (props: HtmlHTMLAttributes<any>) => {
  let menuItems = getMenuItems(props);

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
