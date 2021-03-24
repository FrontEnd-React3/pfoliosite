import "./App.css";
import NavBar from "./components/NavBar";
import Lead from "./components/Lead";
import About from "./components/Aboutme";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import {Button} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Lead />
      <About />
      <Timeline />
    </div>
  );
}

export default App;
