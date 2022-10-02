import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { RootlineToastContainer } from "./RootlineToastContainer";
import { ToasterConfigType } from "./toast.type";

export const RootlineToastAPI = (props: ToasterConfigType) => {
  let root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );

  function renderToastContainer(text: string | ReactNode) {
    root.render(<RootlineToastContainer toasts={{ text: text }} />);
  }

  function updateToasts(toast: ToasterConfigType) {
    renderToastContainer(toast?.text);
  }

  renderToastContainer(props.text);

  return {
    addToast: updateToasts,
  };
};
