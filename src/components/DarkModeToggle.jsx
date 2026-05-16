import React from "react";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Light mode" : "Dark mode"}
    </button>
  );
};

export default DarkModeToggle;