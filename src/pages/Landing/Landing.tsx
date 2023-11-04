import { ShimoolzIcon } from "../../icons/svg.custom";
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
            Let’s bring your <br /> unique idea into reality
          </h1>
          <div className="text-container-line">
            <div className="text-container-shape designation-container">
              <span className="designation">Full stack web app developer</span>
            </div>
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
              style={{
                height: "190px",
                position: "absolute",
                bottom: 10,
                right: 20,
                display: "flex",
              }}
              alt="shimul_mridha"
            />

            <div
              style={{
                height: 18,
                width: 210,
                position: "absolute",
                transform: "rotate(-29deg)",
                borderRadius: 45,
                bottom: 22,
                right: -40,
              }}
              className="highlight-background"
            />
            <div
              style={{
                height: 18,
                width: 210,
                position: "absolute",
                transform: "rotate(-29deg)",
                borderRadius: 45,
                bottom: 20,
                right: -10,
              }}
              className="white-background"
            />
            <div
              style={{
                height: 18,
                width: 210,
                position: "absolute",
                transform: "rotate(-29deg)",
                borderRadius: 45,
                bottom: -4,
                right: -32,
              }}
              className="white-background"
            />

            <div className="shimoolz-sign">
              <ShimoolzIcon className="primary-color" />
            </div>
          </div>
          <AnalogClock />
        </div>
      </div>
    </section>
  );
};
