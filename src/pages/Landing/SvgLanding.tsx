import { SVGProps } from "react";
import { ReactComponent as LandingContent } from "../../svgs/landing-content.svg";
import { ReactComponent as Avatar } from "../../svgs/myavatar.svg";

export const SvgLanding = (props: SVGProps<any>) => {
  return <LandingContent {...props} />;
};

export const LandingAvatar = (props: SVGProps<any>) => {
  return <Avatar {...props} />;
};
