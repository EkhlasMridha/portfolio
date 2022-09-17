import { SVGProps } from "react";
import { ReactComponent as User } from "../svgs/user.svg";
import { ReactComponent as Mail } from "../svgs/mail.svg";
import { ReactComponent as FooterShape } from "../svgs/footer-shape.svg";
import { ReactComponent as LinkedInCircle } from "../svgs/linkedin.svg";
import { ReactComponent as GithubIcon } from "../svgs/github.svg";
import { ReactComponent as UpArrow } from "../svgs/scrollup.svg";
import { ReactComponent as LeftArrow } from "../svgs/left-arrow.svg";
import { ReactComponent as AvatarShape } from "../svgs/avatar-icon.svg";
import { ReactComponent as LeftAngle } from "../svgs/left-slide.svg";
import { ReactComponent as RightAngle } from "../svgs/right-slide.svg";

export const UserFilled = (props: SVGProps<any>) => {
  return <User {...props} />;
};

export const MailIFilled = (props: SVGProps<any>) => {
  return <Mail {...props} />;
};

export const FooterRound = (props: SVGProps<any>) => {
  return <FooterShape {...props} />;
};

export const LinkedIn = (props: SVGProps<any>) => {
  return <LinkedInCircle {...props} />;
};

export const Github = (props: SVGProps<any>) => {
  return <GithubIcon {...props} />;
};

export const ScrollupIcon = (props: SVGProps<any>) => {
  return <UpArrow {...props} />;
};

export const LeftArrowIcon = (props: SVGProps<any>) => {
  return <LeftArrow {...props} />;
};

export const AvatarIcon = (props: SVGProps<any>) => {
  return <AvatarShape {...props} />;
};

export const SliderLeft = (props: SVGProps<any>) => {
  return <LeftAngle {...props} />;
};

export const SliderRight = (props: SVGProps<any>) => {
  return <RightAngle {...props} />;
};
