import "./Landing.scss";
import { LandingAvatar, SvgLanding } from "./SvgLanding";

export const Landing = (props: any) => {
  return (
    <section
      key={"landing"}
      className="landing-page primary-background primary-textcolor top-0 h-screen"
    >
      <div className="landing-content padding-side-20">
        <div className="left-content" key={"lefcontent"}>
          <h1>Hi!, I'M</h1>
          <h1 style={{ marginTop: "8px" }}>Ekhlas Ali Mridha</h1>
          <div className="divider-line highlight-color"></div>
          <h2>Web Developer</h2>
        </div>
        <div className="graphics-container" key={"graphics"}>
          <LandingAvatar className="brand-avatar" />
          <SvgLanding />
        </div>
      </div>
    </section>
  );
};
