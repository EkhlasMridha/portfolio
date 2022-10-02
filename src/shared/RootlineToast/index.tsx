import { RootlineToastAPI } from "./RootlineToastAPI";
import { ToasterConfigType, ToasterPropsType } from "./toast.type";

var openToaster = (function componentToaster() {
  var toastControl: any;
  return function openToasterFn(config: ToasterConfigType) {
    if ((toastControl ?? "") === "") {
      toastControl = RootlineToastAPI({ text: config?.text });
    } else {
      toastControl?.addToast({ text: config?.text });
    }
  };
})();

const toaster: ToasterPropsType = {
  show: openToaster,
};

export default toaster;
