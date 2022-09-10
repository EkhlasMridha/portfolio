import { SVGProps } from "react";
import { ReactComponent as User } from "../svgs/user.svg";
import { ReactComponent as Mail } from "../svgs/mail.svg";
import { ReactComponent as FooterShape } from "../svgs/footer-shape.svg";
import { ReactComponent as LinkedInCircle } from "../svgs/linkedin.svg";
import { ReactComponent as GithubIcon } from "../svgs/github.svg";
import { ReactComponent as UpArrow } from "../svgs/scrollup.svg";

export const UserFilled = (props: SVGProps<any>) => {
  return <User {...props} />;
};

export const MailIFilled = (props: SVGProps<any>) => {
  return <Mail {...props} />;
};

export const FooterRound = (props: SVGProps<any>) => {
  return <FooterShape />;
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
