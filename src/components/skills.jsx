import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import vite from "../assets/vite.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

function Skills() {
  return (
    <div className="skills mt-20">
      <h2 className="text-center text-4xl mb-6">Current Skills</h2>
      <div className="flex justify-center items-center gap-20 flex-wrap p-10">
        <div className="flex flex-col items-center transition ease duration-300 hover:scale-125">
          <img src={html} alt="html" className="w-8 h-8 md:h-16 md:w-16" />
          <p className="text-center">HTML</p>
        </div>
        <div className="flex flex-col items-center transition ease duration-300 hover:scale-125">
          <img src={css} alt="css" className="w-8 h-8 md:h-16 md:w-16" />
          <p className="text-center">CSS</p>
        </div>
        <div className="flex flex-col items-center transition ease duration-300 hover:scale-125">
          <img src={js} alt="js" className="w-8 h-8 md:h-16 md:w-16" />
          <p className="text-center">JavaScript</p>
        </div>
        <div className="flex flex-col items-center transition ease duration-300 hover:scale-125">
          <img src={vite} alt="vite" className="w-8 h-8 md:h-16 md:w-16" />
          <p className="text-center">Vite</p>
        </div>
        <div className="flex flex-col items-center transition ease duration-300 hover:scale-125">
          <img src={react} alt="react" className="w-8 h-8 md:h-16 md:w-16" />
          <p className="text-center">React</p>
        </div>
        <div className="flex flex-col items-center transition ease duration-300 hover:scale-125">
          <img
            src={tailwind}
            alt="tailwind"
            className="w-8 h-8 md:h-16 md:w-16"
          />
          <p className="text-center">Tailwind</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
