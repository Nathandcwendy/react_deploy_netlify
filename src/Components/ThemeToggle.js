import React from "react";
import { MdToggleOn, MdToggleOff } from "react-icons/md";

const ThemeToggle = ({ theme, handleChangeTheme }) => {
  return (
    <div className="ThemeToggle">
      <p>{theme ? "Dark" : "Light"} Mode</p>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="ToggleGradient" x1="0" y1="0" x2="1" y2="0">
            <stop className="stop-1" offset="0%" />
            <stop className="stop-2" offset="100%" />
          </linearGradient>
          <linearGradient id="ToggleGradientFixed" x1="0" y1="0" x2="1" y2="0">
            <stop className="stop-fixed-1" offset="0%" />
            <stop className="stop-fixed-2" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
      {theme ? (
        <MdToggleOff className={"ToggleColor"} onClick={handleChangeTheme} />
      ) : (
        <MdToggleOn className={"ToggleColor"} onClick={handleChangeTheme} />
      )}
    </div>
  );
};

export default ThemeToggle;
