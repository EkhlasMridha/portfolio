import { ShimoolzIcon, ShimulMridhaIcon } from "../../icons/svg.custom";
import { AnalogClock } from "../../shared/AnalogClock";
import "./Landing.scss";

export const Landing = (props: any) => {
  // const allTexts: string[] = ["Web Developer", "UI/UX Designer"];
  // const [index, setIndex] = useState<number>(0);
  // // let count = 0;
  // var suffleWorkType = (containerId: string) => {
  //   let workType = document.getElementsByClassName(
  //     containerId
  //   ) as HTMLCollectionOf<HTMLElement>;
  //   for (let i = 0; i < workType?.length; ++i) {
  //     workType[i].style.display = "none";
  //   }
  //   workType[index].style.display = "block";
  // };

  // useEffect(() => {
  //   suffleWorkType("work-type");
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     suffleWorkType("work-type");
  //     setIndex((pre) => {
  //       let newIndex = pre + 1 > allTexts.length - 1 ? 0 : pre + 1;
  //       return newIndex;
  //     });
  //   }, 3000);
  // }, [index]);

  return (
    <section
      key={"landing"}
      className="landing-page primary-background primary-textcolor top-0 h-screen"
    >
      <div className="landing-content content-container padding-side-20">
        <div className="left-content primary-color" key={"lefcontent"}>
          <h1 className="greeting text-white">
            <span>Let’s bring your</span>
            <span>unique idea into reality</span>
          </h1>
          <div
            className="text-container-line"
            style={{ position: "relative" }}
            aria-describedby="heading"
          >
            <div className="text-container-shape designation-container">
              <span className="designation">Web app developer</span>
            </div>
            <div className="animation-block"></div>
            <h1
              className="text-white shimul_mridha"
              aria-label="Shimul mridha"
              aria-describedby="Ekhlas mridha"
            >
              Shimul mridha
            </h1>
          </div>
        </div>
        <div className="graphics-container justify-center" key={"graphics"}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                height: 250,
                width: 250,
                borderRadius: "50%",
                background: "#fff",
              }}
            />
            <div
              style={{
                height: 230,
                width: 230,
                borderRadius: "50%",
                position: "absolute",
                bottom: 2,
                right: 4,
              }}
              className="highlight-background"
            />

            <img
              src="./assets/images/my_avatar.png"
              className="avatar-image"
              alt="shimul_mridha_ekhlas_mridha"
            />

            <div
              className="highlight-background line-elements position1"
              id="pos1_animate"
            />
            <div
              className="white-background line-elements position2"
              id="pos2_animate"
            />
            <div
              className="white-background line-elements position3"
              id="pos3_animate"
            />

            <div className="shimoolz-sign">
              <ShimoolzIcon className="primary-color" style={{ height: 53 }} />
            </div>
          </div>
          <AnalogClock />
        </div>
      </div>
    </section>
  );
};
