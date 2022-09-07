import "./Navigation.scss";
import { NavigationItem } from "./NavigationItem";
import { NavigationProps } from "./navigations.type";

export const Navigation = (props: NavigationProps) => {
  const { className, items, ...restProps } = props;
  const combinedClassName =
    "header-toolbar primary-background " + (className ?? "");
  return (
    <header className={combinedClassName} {...restProps}>
      <nav>
        <ul className="nav-container primary-textcolor">
          {items.map((item) => (
            <NavigationItem {...item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
