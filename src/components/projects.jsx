import { useState, useContext } from "react";
import { DarkModeContext } from "./darkMode";
import weatherApp from "../assets/weatherApp.png";
import battleship from "../assets/battleship.png";
import restaurantPage from "../assets/restaurantPage.png";
import pokemonSearchApp from "../assets/pokemonSearchApp.png";
import calculator from "../assets/calculator.png";
import todoApp from "../assets/todoApp.png";
import ticTacToe from "../assets/ticTacToe.png";
import cashRegister from "../assets/cashRegister.png";
import pomodoro from "../assets/pomodoro2.0.png";
import mdPreviewer from "../assets/mdPreviewer.png";
import cvBuilder from "../assets/cvBuilder.png";
import memoryCardGame from "../assets/memoryCardGame.png";
import github from "../assets/github.png";
import site from "../assets/site.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const { darkMode } = useContext(DarkModeContext);
  const [switchPage, setSwitchPage] = useState(projectsPage1);
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <section id="projects" className="pt-28 md:pt-56">
      <h3 className="text-center text-5xl font-bold">My Work</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm:gap-x-96 md:gap-x-96 lg:gap-x-32 gap-y-16 p-10 md:p-24 lg:p-32 place-items-center">
        {switchPage.map((project) => (
          <div
            className="p-6 w-80 min-h-full flex flex-col items-center shadow-lg shadow-slate-700 transition ease duration-300 hover:scale-105"
            key={project.name}
          >
            <a href={project.siteLink} target="_blank">
              <img
                src={project.screenshot}
                alt={project.name}
                className="w-80 h-48 rounded-md"
              />
            </a>
            <h4 className="text-xl font-semibold mb-5 mt-5 text-center">
              {project.name}
            </h4>
            <p className="text-lg mb-5 text-center">{project.description}</p>
            <div className="flex gap-3">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="links"
                  src={github}
                  alt="GitHub"
                  className={`rounded-full w-10 h-10 p-1 transition ease duration-300 hover:scale-125 ${
                    darkMode ? "bg-white" : ""
                  }`}
                />
              </a>
              <a
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="links"
                  src={site}
                  alt="Site"
                  className={`rounded-full w-10 h-10 p-1 transition ease duration-300 hover:scale-125 ${
                    darkMode ? "bg-white" : ""
                  }`}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3">
        <button
          id="page1"
          onClick={() => {
            setSwitchPage(projectsPage1);
            setSelectedPage(1);
          }}
          className={`transition ease duration-300 hover:scale-110 ${
            selectedPage === 1 ? "text-blue-900" : ""
          } ${darkMode ? "" : "text-blue-300"}`}
        >
          <FontAwesomeIcon icon={faCircle} />
        </button>
        <button
          id="page2"
          onClick={() => {
            setSwitchPage(projectsPage2);
            setSelectedPage(2);
          }}
          className={`transition ease duration-300 hover:scale-110 ${
            selectedPage === 2 ? "text-blue-900" : ""
          } ${darkMode ? "" : "text-blue-300"}`}
        >
          <FontAwesomeIcon icon={faCircle} />
        </button>
      </div>
    </section>
  );
}

export default Projects;

const projectsPage1 = [
  {
    screenshot: weatherApp,
    name: "Weather App",
    description:
      "Find your city, add it to the list and get the current weather, view other cities weather and delete them from the list. Toggle between Celsius and Fahrenheit. Background images change depending on the weather and day/night. Responsive on both desktop and mobile.",
    repoLink: "https://github.com/00mark0/weather-app.git",
    siteLink: "https://00mark0.github.io/weather-app/",
  },
  {
    screenshot: battleship,
    name: "Battleship",
    description:
      "Play the game of Battleship against the computer. Place your ships on both the desktop version and on mobile however you like or randomize placement. The computer will randomly place its ships. Select between easy, medium and hard difficulty. Have fun!",
    repoLink: "https://github.com/00mark0/odin-project---battleship.git",
    siteLink: "https://00mark0.github.io/odin-project---battleship/",
  },
  {
    screenshot: restaurantPage,
    name: "Restaurant Page",
    description:
      "A simple restaurant page with a home, menu, about and contact page. The menu page is generated with JavaScript. The page is responsive on both desktop and mobile. This was my introduction to bundlers, and for this one I used Webpack, but I prefer to use Vite.",
    repoLink: "https://github.com/00mark0/odin-project---restaurant-page.git",
    siteLink: "https://00mark0.github.io/odin-project---restaurant-page/",
  },
  {
    screenshot: pokemonSearchApp,
    name: "Pokemon Search App",
    description:
      "Search for your favorite pokemon and see their stats. The best feature is the added sound for KOFFING. The best pokemon sound ever.",
    repoLink: "https://github.com/00mark0/fCC-project---pokemon-search-app.git",
    siteLink: "https://00mark0.github.io/fCC-project---pokemon-search-app/",
  },
  {
    screenshot: cvBuilder,
    name: "CV Builder",
    description:
      "Fully customizable CV builder. Omit or add sections as you like. Download your CV as a PDF.",
    repoLink: "https://github.com/00mark0/odin-project---cv-app.git",
    siteLink: "https://odinprojectcvapp.netlify.app/",
  },
  {
    screenshot: memoryCardGame,
    name: "Pokemon Memory Game",
    description: "Memory card game with Pokemon. Gotta catch 'em all!",
    repoLink: "https://github.com/00mark0/odin-project---memory-card.git",
    siteLink: "https://odinproject-memorycard.netlify.app/",
  },
];

const projectsPage2 = [
  {
    screenshot: pomodoro,
    name: "Pomodoro Timer",
    description:
      "Pomodoro timer. Set the time for work and break. Get to work!",
    repoLink: "https://github.com/00mark0/pomodoro2.0.git",
    siteLink: "https://00mark0.github.io/pomodoro2.0/",
  },
  {
    screenshot: todoApp,
    name: "To Do App",
    description: "Got to have a To Do App, right? Can't go without it.",
    repoLink: "https://github.com/00mark0/odin-project---todo-app.git",
    siteLink: "https://00mark0.github.io/odin-project---todo-app/",
  },
  {
    screenshot: ticTacToe,
    name: "Tic Tac Toe",
    description: "Tic Tac Toe game. So many possibilities in this one.",
    repoLink: "https://github.com/00mark0/odin-project---tic-tac-toe.git",
    siteLink: "https://00mark0.github.io/odin-project---tic-tac-toe/",
  },
  {
    screenshot: cashRegister,
    name: "Cash Register",
    description:
      "Keep track of how much change to return, and how much money is in the register. This was a fun one.",
    repoLink: "https://github.com/00mark0/fCC-project---cash-register.git",
    siteLink: "https://00mark0.github.io/fCC-project---cash-register/",
  },
  {
    screenshot: mdPreviewer,
    name: "Markdown Previewer",
    description:
      "Markdown Previewer. Write markdown and see it rendered. Practice your READMEs. (unlike me)",
    repoLink: "https://github.com/00mark0/fCC-project---markdown-previewer.git",
    siteLink: "https://00mark0.github.io/fCC-project---markdown-previewer/",
  },
  {
    screenshot: calculator,
    name: "Calculator",
    description:
      "Figured I'd also throw in a calculator project for good measure.",
    repoLink: "https://github.com/00mark0/odin-project---calculator.git",
    siteLink: "https://00mark0.github.io/odin-project---calculator/",
  },
];
