import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = ({ theme, handleChangeTheme }) => {
  return (
    <header className="Header">
      <div className="left-header">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <hr className="invisible" />
      <div className="right-header">
        <ThemeToggle theme={theme} handleChangeTheme={handleChangeTheme} />
      </div>
    </header>
  );
};

export default Header;
