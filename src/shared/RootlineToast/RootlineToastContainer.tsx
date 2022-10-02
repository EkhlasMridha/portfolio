import React, { useEffect, useMemo, useState } from "react";
import { RootlineToast } from "./RootlineToast";
import "./RootlineToast.scss";
import { RootlineToastContainerProps, RootlineToastProps } from "./toast.type";

const ToastContext = React.createContext<any>(null);

export default ToastContext;

export const RootlineToastContainer = (props: RootlineToastContainerProps) => {
  const { toasts, ...restProps } = props;
  const [toastList, setToasts] = useState<RootlineToastProps[]>([]);

  const combinedClass = "rootline-toast-container";

  useMemo(() => {
    setToasts((pre) => {
      return (pre ?? []).concat(toasts ?? { text: "" });
    });
  }, [toasts]);

  useEffect(() => {
    if (toastList.length > 0) {
      const timer = setTimeout(() => {
        setToasts((pre) => pre.slice(1));
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toastList]);

  return (
    <div {...restProps} id="rootline_toast_container" className={combinedClass}>
      {toastList?.map((item, index) => (
        <RootlineToast
          key={index}
          text={item?.text}
          style={{ zIndex: index + 1 }}
        />
      ))}
    </div>
  );
};
