import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#111827";
      document.body.style.color = "#f5f5f5";
    } else {
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "#111827";
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

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
