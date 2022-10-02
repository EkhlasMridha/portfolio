import { HtmlHTMLAttributes, ReactNode } from "react";

export interface RootlineToastContainerProps {
  toasts?: RootlineToastProps;
}

export interface RootlineToastProps extends HtmlHTMLAttributes<any> {
  text: ReactNode | string;
}
export interface ToasterConfigType extends RootlineToastProps {
  container?: HtmlHTMLAttributes<any>;
}
export interface ToasterPropsType {
  show: (config: ToasterConfigType) => void;
}
