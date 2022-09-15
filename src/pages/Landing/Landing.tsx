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
          <h1 className="uppercase greeting">
            Hi<span className="highlight-color">!</span> I am,
          </h1>
          <h1 className="myname uppercase">Ekhlas Ali Mridha</h1>
        </div>
        <div className="graphics-container justify-center" key={"graphics"}>
          <LandingAvatar className="brand-avatar" />
          <SvgLanding />
        </div>
      </div>
    </section>
  );
};
