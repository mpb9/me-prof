import React, { useState } from 'react';
// import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import TheaterFacade from './components/theater/TheaterFacade';
import { Dark } from './data/Themes';
// import { BW, Dark, Light, MyFav } from './data/Themes';

export default function App() {
  const [theme, setTheme] = useState(Dark);
  const changeTheme = (new_theme) => {
    setTheme(new_theme);
  };

  const useTheaterTheme = true;

  if (useTheaterTheme) {
    return (
      <div className='min-h-screen'>
        <TheaterFacade />
      </div>
    );
  }
  return (
    <div className={'min-h-screen ' + theme.main.main_tw}>
      <NavBar changeTheme={changeTheme} theme={theme} />
      <Home className='h-screen' theme={theme} />
    </div>
  );
}
