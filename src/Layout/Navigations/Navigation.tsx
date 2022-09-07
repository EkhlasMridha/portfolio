import "./Navigation.scss";
import { NavigationItem } from "./NavigationItem";
import { NavigationProps } from "./navigations.type";

export const Navigation = (props: NavigationProps) => {
  return (
    <header className="header-toolbar primary-background">
      <nav>
        <ul className="nav-container primary-textcolor">
          {props.items.map((item) => (
            <NavigationItem {...item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
