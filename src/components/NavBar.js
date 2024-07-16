import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Dark, Light } from "../data/Themes";

NavBar.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default function NavBar(props) {
  const [activeTheme, setActiveTheme] = useState(props.theme);

  const changeThemeNav = (event) => {
    if (event) {
      if (activeTheme == Dark) {
        setActiveTheme(Light);
        props.changeTheme(Light);
        return;
      } else {
        setActiveTheme(Dark);
        props.changeTheme(Dark);
      }
    }
  };

  useEffect(() => {
    console.log("NavBar -> activeTheme", activeTheme);
  }, [activeTheme]);

  return (
    <nav
      className="flex items-center justify-between p-4"
      style={{ backgroundColor: activeTheme.nav.bg }}
    >
      <div className="flex items-center space-x-4">
        <a href="#" className="text-lg font-bold">
          Logo
        </a>
        <a href="#" className="hidden md:block">
          Home
        </a>
        <button onClick={changeThemeNav} className="md:block">
          {activeTheme.name == "light" ? "dark" : "light"}
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hidden md:block">
          Contact
        </a>
        <select className="hidden md:block">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
        <button className="block md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
