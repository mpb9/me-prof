import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Dark, Light } from "./data/Themes";

export default function App() {
  const [theme, setTheme] = useState(Dark);

  const changeTheme = (new_theme) => {
    if (new_theme == Dark) {
      setTheme(Dark);
    } else if (new_theme == Light) {
      setTheme(Light);
    }
  };

  // useEffect(() => {
  //   console.log("App -> theme", theme);
  // }, [theme]);

  return (
    <div className="">
      <NavBar changeTheme={changeTheme} theme={theme} />
      <Home className="h-screen" theme={theme} />
    </div>
  );
}
