import "./Navigation.scss";
import { NavigationItem } from "./NavigationItem";
import { NavigationProps } from "./navigations.type";

export const Navigation = (props: NavigationProps) => {
  const { className, items, ...restProps } = props;
  const combinedClassName = "header-toolbar " + (className ?? "");
  return (
    <header className={combinedClassName} {...restProps}>
      <nav className="header-nav">
        <div className="nav-background"></div>
        <ul className="nav-container primary-textcolor">
          {items.map((item) => (
            <NavigationItem {...item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
