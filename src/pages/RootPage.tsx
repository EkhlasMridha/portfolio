import { useEffect } from "react";
import { Layout } from "../Layout/Layout";
// import { PageLoader } from "../shared/PageLoader/PageLoader";
import { About } from "./About/About";
import { Contact } from "./Contacts/Contact";
import { Landing } from "./Landing/Landing";
import { Works } from "./Works/Works";

const RootPage = () => {
  useEffect(() => {
    let content = document.querySelector(".about-container");
    if ((content ?? "") !== "") {
      obServeAndAnimateAbout(content as Element);
    }
  }, []);

  function obServeAndAnimateAbout(content: Element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const aboutDesc = entry.target.querySelector(
          ".about-description"
        ) as Element;
        const aboutHeader = entry.target.querySelector(
          ".about-header"
        ) as Element;

        if (entry.isIntersecting) {
          aboutDesc.classList.add("animate-desc");
          aboutHeader.classList.add("animate-about-header");
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        aboutDesc.classList.remove("animate-desc");
        aboutHeader.classList.remove("animate-about-header");
      });
    });

    observer.observe(content);
  }

  return (
    <>
      <Layout>
        <Landing />
        <About />
        <Works />
        <Contact />
      </Layout>
      {/* <PageLoader /> */}
    </>
  );
};

export default RootPage;
