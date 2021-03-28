import "./App.css";
import NavBar from "./components/NavBar";
import Lead from "./components/Lead";
import About from "./components/Aboutme";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import { Button } from "@material-ui/core";
import NavB from "./components/NavB";
import MailMe from "./components/Emailme";
// import { InfoData, InfoDataTwo } from './InfoData';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <NavB />
      <Lead />
      <About />
      <Timeline />
      <Skills />
      <MailMe />
    </div>
  );
}

export default App;
