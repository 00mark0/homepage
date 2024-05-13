import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from "react-icons/fa";
import DarkModeToggle from "./darkMode";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 flex justify-between items-center p-7 text-xl font-medium border-b border-blue-200 bg-primary text-secondary">
      <div className="logo hover:text-blue-200 cursor-pointer transition ease duration-300">
        <a href="#">
          <FontAwesomeIcon icon={faTerminal} />
          <span> M.R</span>
        </a>
      </div>
      <div className="navLinks">
        <button
          type="button"
          className=" md:hidden sm:block"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
        <ul className="xsm:hidden md:flex flex-row gap-2">
          <li>
            <a
              href="#about"
              className="hover:text-blue-200 transition ease duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-200 transition ease duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-200 transition ease duration-300"
            >
              Contact
            </a>
          </li>
          <DarkModeToggle />
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-primary text-secondary p-2 rounded-md">
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#about"
                className="hover:text-blue-200 transition ease duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-200 transition ease duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <DarkModeToggle />
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
