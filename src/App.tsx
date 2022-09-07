import "./App.scss";
import { Layout } from "./Layout/Layout";
import { About } from "./pages/About/About";
import { Landing } from "./pages/Landing/Landing";

function App() {
  return (
    <Layout>
      <Landing />
      <About />
    </Layout>
  );
}

export default App;
