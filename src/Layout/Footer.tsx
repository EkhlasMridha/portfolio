import {
  AvatarIcon,
  FooterRound,
  Github,
  LinkedIn,
  MailIFilled,
} from "../icons/svg.custom";
import "./Footer.scss";

export const Footer = (props: any) => {
  let currenYear = new Date().getFullYear();
  return (
    <footer className="white-background app-footer flx flx-col app-footer">
      <FooterRound style={{ display: "block" }} />
      <div className="footer-content-container primary-background flx">
        <div
          style={{ rowGap: 20 }}
          className="content-container padding-side-20 primary-textcolor justify-center app-footer-content flx flx-col"
        >
          <div className="footer-avatar flx justify-center">
            <AvatarIcon height={40} className="avatar-icon" />
          </div>

          <div
            className="flx primary-textcolor justify-center"
            style={{ columnGap: 21 }}
          >
            <a
              className="cursor-pointer"
              href="https://github.com/EkhlasMridha"
              target={"_blank"}
            >
              <Github />
            </a>
            <a
              className="cursor-pointer"
              href="https://www.linkedin.com/in/ekhlas-mridha-802586154"
              target={"_blank"}
            >
              <LinkedIn />
            </a>
          </div>
          <div className="copyright">
            Copyright&copy;{currenYear} Ekhlas Ali Mridha All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
