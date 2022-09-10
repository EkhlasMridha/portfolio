import { ScrollupIcon } from "../icons/svg.custom";
import "./Scrollup.scss";

export const ScrollUp = (props: any) => {
  const onScrollUp = () => {};

  return (
    <div
      className="scrollup-container highlight-background cursor-pointer"
      onClick={onScrollUp}
    >
      <div className="scrollup-button secondary-textcolor">
        <ScrollupIcon height={"20px"} />
      </div>
    </div>
  );
};
