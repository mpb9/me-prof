import { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CoolStuff from './components/cool_stuff/CoolStuff';
import NewTab from './components/cool_stuff/new_tab/NewTab';
import DevWork from './components/dev_work/DevWork';
import Home from './components/Home';
import Theater from './components/theater/Theater';
import NavBar from './components/utils/NavBar';
import { Dark } from './data/Themes';

export default function App() {
  const [theme, setTheme] = useState(Dark);
  const changeTheme = (new_theme) => {
    setTheme(new_theme);
  };

  const useTheaterTheme = true;

  if (useTheaterTheme) {
    return (
      <div className='min-h-screen'>
        <Router>
          <Routes>
            <Route path='/' element={<Theater />} />
            <Route path='/dev' element={<DevWork />} />
            <Route path='/stuff' element={<CoolStuff />} />
            <Route path='/new-tab' element={<NewTab />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </div>
    );
  }
  return (
    <div className={'min-h-screen ' + theme.main.main_tw}>
      <NavBar changeTheme={changeTheme} theme={theme} themeName='dark' />
      <Home className='h-screen' theme={theme} />
    </div>
  );
}
