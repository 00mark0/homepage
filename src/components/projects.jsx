import weatherApp from "../assets/weatherApp.png";
import battleship from "../assets/battleship.png";
import restaurantPage from "../assets/restaurantPage.png";
import pokemonSearchApp from "../assets/pokemonSearchApp.png";
import calculator from "../assets/calculator.png";
import github from "../assets/github.png";
import site from "../assets/site.png";
import { forAnotherFile } from "./darkMode.jsx";

function Projects() {
  return (
    <section id="projects" className="pt-28 md:pt-56">
      <h3 className="text-center text-5xl font-bold">My Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:p-24 lg:p-32 place-items-center ">
        {projectsPage1.map((project) => (
          <div
            className="card p-6 w-80 flex flex-col items-center transition ease duration-300 hover:scale-105"
            key={project.name}
          >
            <a href={project.siteLink} target="_blank">
              <img
                src={project.screenshot}
                alt={project.name}
                className="w-80 h-48 rounded-md"
              />
            </a>
            <h4 className="text-xl font-semibold mb-5 mt-5">{project.name}</h4>
            <p className="text-lg mb-5">{project.description}</p>
            <div className="links flex gap-3">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className={`rounded-full w-10 h-10 p-1 transition ease duration-300 hover:scale-125 ${
                    forAnotherFile ? "bg-secondary" : ""
                  }`}
                />
              </a>
              <a
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={site}
                  alt="Site"
                  className={`rounded-full w-10 h-10 p-1 transition ease duration-300 hover:scale-125 ${
                    forAnotherFile ? "bg-secondary" : ""
                  }`}
                />
              </a>
            </div>
          </div>
        ))}
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
    screenshot: calculator,
    name: "Calculator",
    description:
      "Figured I'd also throw in a calculator project for good measure.",
    repoLink: "https://github.com/00mark0/odin-project---calculator.git",
    siteLink: "https://00mark0.github.io/odin-project---calculator/",
  },
];
