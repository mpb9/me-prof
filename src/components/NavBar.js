import PropTypes from "prop-types";
import React, { useState } from "react";
import { ActivePage } from "../data/ActivePage";
import { MyInfo } from "../data/MyInfo";
import { Dark, GreyScale, Light } from "../data/Themes";

NavBar.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default function NavBar(props) {
  const [activeTheme, setActiveTheme] = useState(props.theme);
  const [page] = useState(ActivePage);

  const changeThemeNav = (event) => {
    if (event) {
      let new_theme = null;
      switch (event.target.value) {
        case "Dark":
          new_theme = Dark;
          break;
        case "Light":
          new_theme = Light;
          break;
        case "B+W":
          new_theme = GreyScale;
          break;
        default:
          return;
      }
      setActiveTheme(new_theme);
      props.changeTheme(new_theme);
    }
  };

  return (
    <nav
      className={
        "flex items-center justify-between p-4" + activeTheme.nav.inlineCSS
      }
    >
      <div className="flex items-center space-x-4">
        <div className="cursor-default text-lg font-bold">Logo</div>
        <a href={page.url.dev} className="hidden md:block">
          Home
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href={MyInfo.urls.github}
          target="_blank"
          rel="noreferrer"
          className="hidden md:block"
        >
          GitHub
        </a>
        <a
          href={MyInfo.urls.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hidden md:block"
        >
          LinkedIn
        </a>
        <select
          onChange={changeThemeNav}
          className={"hidden md:block" + activeTheme.nav_btn.inlineCSS}
        >
          <option>Dark</option>
          <option>Light</option>
          <option>B+W</option>
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
