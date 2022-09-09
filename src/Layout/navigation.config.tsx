import { NavigationItemsProps } from "./Navigations/navigations.type";

export const getMenuItems = (props: any) => {
  var menuItems: NavigationItemsProps;
  return (menuItems = [
    {
      label: "About",
      key: "about",
      to: "about",
    },
    {
      label: "Works",
      key: "works",
      to: "works",
    },
    {
      label: "Contact",
      key: "contact",
      to: "contact",
    },
  ]);
};
