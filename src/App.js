import React, { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Dark } from "./data/Themes";

export default function App() {
  const [theme, setTheme] = useState(Dark);

  const changeTheme = (new_theme) => {
    setTheme(new_theme);
  };

  return (
    <div className={"min-h-screen " + theme.main.bg}>
      <NavBar changeTheme={changeTheme} theme={theme} />
      <Home className="h-screen" theme={theme} />
    </div>
  );
}
