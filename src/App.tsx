import { Layout } from "./Layout/Layout";
import { About } from "./pages/About/About";
import { Landing } from "./pages/Landing/Landing";
import { Works } from "./pages/Works/Works";

function App() {
  return (
    <Layout>
      <Landing />
      <About />
      <Works />
    </Layout>
  );
}

export default App;
