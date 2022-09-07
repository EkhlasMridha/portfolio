import { HtmlHTMLAttributes, ReactNode } from "react";

export interface NavigationItemProps extends HtmlHTMLAttributes<any> {
  label: ReactNode | string;
  key: any;
}

export type NavigationItemsProps = NavigationItemProps[];

export interface NavigationProps extends HtmlHTMLAttributes<any> {
  items: NavigationItemsProps;
}
