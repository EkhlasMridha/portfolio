import "./Landing.scss";
import { LandingAvatar, SvgLanding } from "./SvgLanding";

export const Landing = (props: any) => {
  console.log("Working 1");
  return (
    <section
      key={"landing"}
      className="landing-page primary-background primary-textcolor top-0 h-screen"
    >
      <div className="landing-content content-container padding-side-20">
        <div className="left-content primary-color" key={"lefcontent"}>
          <h1>Hi! I am,</h1>
          <h1 className="myname">Ekhlas Ali Mridha</h1>
          <div className="highlight-color typewriter-text">
            {/* <TypeWriter texts={["Web Developer", "UI/UX Designer"]} /> */}
          </div>
        </div>
        <div className="graphics-container" key={"graphics"}>
          <LandingAvatar className="brand-avatar" />
          <SvgLanding />
        </div>
      </div>
    </section>
  );
};
