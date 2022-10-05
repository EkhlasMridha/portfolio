import { useRef } from "react";
import { CloseIcon, SuccessIcon } from "../../icons/svg.custom";
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
        <CloseIcon height={10} />
      </button>
      <div {...restProps} className="text-content">
        <SuccessIcon
          height={20}
          style={{ marginRight: "8px" }}
          className="margin-top-bottom-auto"
        />
        <span className="margin-top-bottom-auto">{text}</span>
      </div>
    </div>
  );
};
