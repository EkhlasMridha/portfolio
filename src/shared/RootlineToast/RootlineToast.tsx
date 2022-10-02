import { useRef } from "react";
import "./RootlineToast.scss";
import { RootlineToastProps } from "./toast.type";

export const RootlineToast = (props: RootlineToastProps) => {
  const { text, ...restProps } = props;

  const componentRef = useRef<any>();

  return (
    <div className="rootline-toast" ref={componentRef} {...restProps}>
      <div {...restProps}>{text}</div>
    </div>
  );
};
