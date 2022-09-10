import { Layout } from "./Layout/Layout";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contacts/Contact";
import { Landing } from "./pages/Landing/Landing";
import { Works } from "./pages/Works/Works";

function App() {
  console.log("App");
  return (
    <Layout>
      <Landing />
      <About />
      <Works />
      <Contact />
    </Layout>
  );
}

export default App;
