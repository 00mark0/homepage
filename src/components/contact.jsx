import { useContext } from "react";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
import { DarkModeContext } from "./darkMode";

function Contact() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="contact" className="pt-28 md:pt-56">
      <h5 className="text-center text-5xl font-bold">Contact</h5>
      <div className="flex flex-col items-center justify-center md:flex md:flex-row md:justify-between md:items-center">
        <div className="p-14 flex flex-col items-center">
          <p className="text-lg">Send me an email</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=00marko.r@gmail.com"
            target="_blank"
          >
            <img
              src={gmail}
              alt="gmail icon"
              className="w-10 h-10 transition ease duration-300 hover:scale-125"
            />
          </a>
        </div>
        <div className="p-14">
          <p className="text-lg">GitHub and LinkedIn</p>
          <div className="flex justify-center items-center gap-1">
            <a href="https://github.com/00mark0" target="_blank">
              <img
                src={github}
                alt="github icon"
                className={`w-10 h-10 transition ease duration-300 hover:scale-125 ${
                  darkMode ? "bg-white" : ""
                } rounded-full`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/marko-radojkovic-55583b287/"
              target="_blank"
            >
              <img
                src={linkedIn}
                alt="github icon"
                className="w-10 h-10 transition ease duration-300 hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
