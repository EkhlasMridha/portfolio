import "./About.scss";

export const About = (props: any) => {
  return (
    <section
      key={"about"}
      className="about-container secondary-background flx-col secondary-textcolor min-h-screen section-container"
      id="about"
    >
      <div className="about-content content-container padding-side-20">
        <h2 className="cursor-text about-header">ABOUT</h2>
        <div className="about-description">
          <p>
            I am a web developer skilled with various web technologies. I like
            to push myself beyond my limit to do something new and creative. I
            always keep myself up to date with the latest technologies and
            passionate to learn new things.
          </p>
          <p>
            I don’t like to define myself by the work I have done. I want to
            define myself by the work I want to do. I like to take challenges
            whenever it comes to do something out of the box. It’s not only just
            about my career, it’s my passion to do exciting works.
          </p>
        </div>
      </div>
    </section>
  );
};
