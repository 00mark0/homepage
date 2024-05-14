import { useEffect, useContext, createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const DarkModeContext = createContext();

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#111827";
      document.body.style.color = "#f5f5f5";
    } else {
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "#111827";
    }
  }, [darkMode]);

  return (
    <li id="darkMode" onClick={toggleDarkMode}>
      <FontAwesomeIcon
        className="hover:text-blue-200 transition ease duration-300 cursor-pointer"
        icon={darkMode ? faSun : faMoon}
      />
    </li>
  );
}

export default DarkModeToggle;
