import Navbar from "../src/components/Navbar";
import { useSelector } from "react-redux";
import HeroSection from "./sections/HeroSection";
import Service from "./sections/Service";
import Projects from "./sections/Projects";
import Offer from "./sections/Offer";
import Footer from "./sections/Footer";
import { useWindowWidth } from "@react-hook/window-size";

function App() {
  const theme = useSelector((state) => state.theme.value);
  const onlyWidth = useWindowWidth();

  return (
    <div className="App" data-theme={theme}>
      <Navbar></Navbar>
      <HeroSection/>
      <Service></Service>
      <Projects></Projects>
      {onlyWidth>650?      <Offer/>
:null}
      <Footer></Footer>
    </div>
  );
}

export default App;
