import React, { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Dark, GreyScale, Light } from "./data/Themes";

export default function App() {
  const [theme, setTheme] = useState(Dark);

  const changeTheme = (new_theme) => {
    if (new_theme === Dark) {
      setTheme(Dark);
    } else if (new_theme === Light) {
      setTheme(Light);
    } else if (new_theme === GreyScale) {
      setTheme(GreyScale);
    }
  };

  return (
    <div className={"min-h-screen " + theme.main.bg}>
      <NavBar changeTheme={changeTheme} theme={theme} />
      <Home className="h-screen" theme={theme} />
    </div>
  );
}
