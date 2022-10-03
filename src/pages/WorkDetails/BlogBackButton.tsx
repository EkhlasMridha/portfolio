import { HtmlHTMLAttributes } from "react";
import { LeftArrowIcon } from "../../icons/svg.custom";
import "./BlogBackButton.scss";

interface BlogBackButtonProps extends HtmlHTMLAttributes<any> {
  text?: string;
}

export const BlogBackButton = (props: BlogBackButtonProps) => {
  return (
    <div
      className="back-button cursor-pointer primary-textcolor"
      onClick={props?.onClick}
    >
      <LeftArrowIcon className="left-arrow" height={20} />
      <span>{props?.text ?? "Back"}</span>
    </div>
  );
};
