import {
  FooterRound,
  Github,
  LinkedIn,
  MailIFilled,
} from "../icons/svg.custom";
import "./Footer.scss";

export const Footer = (props: any) => {
  return (
    <footer
      className="white-background app-footer flx flx-col app-footer"
      //   style={{ display: "flex", flexDirection: "column" }}
    >
      <FooterRound style={{ width: "100vw" }} />
      <div className="footer-content-container primary-background flx">
        <div className="content-container padding-side-20 primary-textcolor app-footer-content flx">
          <div
            className="flx left-footer cursor-pointers"
            style={{ alignItems: "center", columnGap: 8 }}
          >
            <MailIFilled height={"14px"} />{" "}
            <a className="cursor-pointer" href="mailto:ekhlasmridha@gmail.com">
              ekhlasmridha@gmail.com
            </a>
          </div>
          <div className="flx primary-textcolor" style={{ columnGap: 21 }}>
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
        </div>
      </div>
    </footer>
  );
};
