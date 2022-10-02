import { HtmlHTMLAttributes, ReactNode } from "react";

export interface RootlineToastContainerProps {
  toasts?: RootlineToastProps;
}

export interface RootlineToastProps extends HtmlHTMLAttributes<any> {
  text: ReactNode | string;
  close?: (index: string) => void;
}
export interface ToasterConfigType extends Omit<RootlineToastProps, "close"> {
  container?: HtmlHTMLAttributes<any>;
}
export interface ToasterPropsType {
  show: (config: ToasterConfigType) => void;
}
