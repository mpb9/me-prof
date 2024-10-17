import { useState } from 'react';
import { Stuff } from '../../data/Themes';
import NavBar from '../utils/NavBar';
export default function CoolStuff() {
  const [theme, setTheme] = useState(Stuff);
  const changeTheme = (new_theme) => {
    setTheme(new_theme);
  };

  const palette = {
    txt: '#EBE9E6',
    bg: '#4C595A',
    bg_l: '#8299C7',
    bg_d: '#333C4A',
    alt: '#B23F29',
    alt_l: '#BB7157',
    alt_d: '#754F41',
    brdr: '#826526',
  };

  return (
    <div className={'min-h-screen ' + theme.main.main_tw}>
      <NavBar changeTheme={changeTheme} theme={theme} themeName='stuff' />
      <div className={'h-screen m-0 bg-gray-400 p-2 pt-16 ' + theme.main.main_tw}>
        <h1>Stuff I Think is Cool</h1>
      </div>
    </div>
  );
}
