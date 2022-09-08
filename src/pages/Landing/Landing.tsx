import "./Landing.scss";
import { LandingAvatar, SvgLanding } from "./SvgLanding";

export const Landing = (props: any) => {
  return (
    <section className="landing-page primary-background primary-textcolor top-0 h-screen">
      <div className="landing-content">
        <div className="left-content">
          <h1>Hi!, I'M</h1>
          <h1 style={{ marginTop: "8px" }}>Ekhlas Ali Mridha</h1>
          <div className="divider-line highlight-color"></div>
          <h2>Web Developer</h2>
        </div>
        <div className="graphics-container">
          <LandingAvatar className="brand-avatar" />
          <SvgLanding />
        </div>
      </div>
    </section>
  );
};
