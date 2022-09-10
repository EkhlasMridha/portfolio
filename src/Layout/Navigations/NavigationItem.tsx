import { NavigationItemProps } from "./navigations.type";

export const NavigationItem = (props: NavigationItemProps) => {
  const { label, to, ...restProps } = props;
  return (
    <li {...restProps}>
      <a className="nav-item cursor-pointer" href={`/#${to ?? ""}`}>
        {props?.label}
      </a>
    </li>
  );
};
