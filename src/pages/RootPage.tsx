import { Layout } from "../Layout/Layout";
import { About } from "./About/About";
import { Contact } from "./Contacts/Contact";
import { Landing } from "./Landing/Landing";
import { Works } from "./Works/Works";

const RootPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Works />
      <Contact />
    </Layout>
  );
};

export default RootPage;