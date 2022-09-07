import { NavigationItemProps } from "./navigations.type";

export const NavigationItem = (props: NavigationItemProps) => {
  const { label, key, ...restProps } = props;

  return (
    <li key={key} {...restProps}>
      <div className="nav-item">{props?.label}</div>
    </li>
  );
};
