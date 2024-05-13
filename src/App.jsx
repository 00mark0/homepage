import "./App.css";
import Nav from "./components/nav";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <Nav />
      <main>
        <header>
          <About />
        </header>
        <Skills />
        <Projects />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
