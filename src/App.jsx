import "./App.css";
import { useState } from "react";
import { DarkModeContext } from "./components/darkMode";
import Nav from "./components/nav";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Nav />
        <main>
          <header>
            <About />
          </header>
          <Skills />
          <Projects />
        </main>
        <footer>
          <Contact />
        </footer>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
