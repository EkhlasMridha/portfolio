import { useRef } from "react";
import "./RootlineToast.scss";
import { RootlineToastProps } from "./toast.type";

export const RootlineToast = (props: RootlineToastProps) => {
  const { text, close, ...restProps } = props;

  const componentRef = useRef<any>();
  const index = props?.id?.split("-")[1];

  return (
    <div className="rootline-toast" ref={componentRef} {...restProps}>
      <button
        className="toast-close-btn cursor-pointer"
        onClick={() => close && close(index ?? "")}
      >
        x
      </button>
      <div {...restProps}>{text}</div>
    </div>
  );
};
