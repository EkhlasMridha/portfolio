import "./About.scss";

export const About = (props: any) => {
  return (
    <section className="about-container primary-background primary-textcolor min-h-screen">
      <div className="about-content">
        <h2>ABOUT</h2>
        <p>
          I am a full stack web developer skilled with various type of web
          development front-end and backend frameworks and technologies.{" "}
          <strong>My areas of experties are:</strong> ASP.NET Core, NodeJs,
          NestJs, Angular, ReactJs. &nbsp;<strong>Database:</strong> MongoDB,
          MySql, MSSQL.
        </p>
        <p>
          I don't define myself by the work i have done, I like to define myself
          by the work I want to do. I prefer to keep learning and continue to
          challenge myself. It’s not only just about my career it’s my passion
          to do exciting works.
        </p>
      </div>
    </section>
  );
};
