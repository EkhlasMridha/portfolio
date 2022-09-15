import { HtmlHTMLAttributes, ReactNode } from "react";
import "./FigureContainer.scss";

export interface FigureContainerProps extends HtmlHTMLAttributes<any> {
  items: FigureItem[];
}

interface FigureItem {
  caption: string;
  imageSource: string;
}

export type FigureItems = FigureItem[];

export const FigureContainer = (props: FigureContainerProps) => {
  return (
    <div className="flx row flx-wrap figure-size">
      {props.items?.map((item, index) => (
        <figure key={index}>
          <img src={item?.imageSource} alt={item?.caption ?? "Image"} />
          <figcaption>
            <i>{"caption: "}</i>
            {item?.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};
