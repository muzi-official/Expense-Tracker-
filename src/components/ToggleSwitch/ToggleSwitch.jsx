import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContexts/ThemeContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="toggleSwitch">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={handleTheme}
        />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className="ball"></div>
        </label>
      </div>
    </>
  );
};
export default ToggleSwitch;
