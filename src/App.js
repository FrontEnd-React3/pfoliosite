import "./App.css";
import NavBar from "./components/NavBar";
import Lead from "./components/Lead";
import About from "./components/Aboutme";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Lead />
      <About />
      <Experience />
      <Experience />
    </div>
  );
}

export default App;
