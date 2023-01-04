import { useEffect, useState } from "react";
import { LandingElements } from "../../icons/svg.custom";
import "./Landing.scss";
import { LandingAvatar } from "./SvgLanding";

export const Landing = (props: any) => {
  const allTexts: string[] = ["Web Developer", "UI/UX Designer"];
  const [index, setIndex] = useState<number>(0);
  // let count = 0;
  var suffleWorkType = (containerId: string) => {
    let workType = document.getElementsByClassName(
      containerId
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < workType?.length; ++i) {
      workType[i].style.display = "none";
    }
    workType[index].style.display = "block";
  };

  useEffect(() => {
    suffleWorkType("work-type");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      suffleWorkType("work-type");
      setIndex((pre) => {
        let newIndex = pre + 1 > allTexts.length - 1 ? 0 : pre + 1;
        return newIndex;
      });
    }, 3000);
  }, [index]);

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
          <h1 className="myname uppercase">
            Ekhlas Mridha (To Trigger master branch update)
          </h1>
          <div className="work-type highlight-lighten">Web Developer</div>
          <div className="work-type highlight-lighten">Web Designer</div>
        </div>
        <div className="graphics-container justify-center" key={"graphics"}>
          <LandingAvatar className="brand-avatar" />
          <LandingElements />
        </div>
      </div>
    </section>
  );
};
