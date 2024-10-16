import PropTypes from 'prop-types';
import { useState } from 'react';
import { BW, Dark, Light, MyFav } from '../data/Themes';
import burger_png from '../static/imgs/BurgerBoy.png';
import SvgIcon from './utils/SvgIcon';

NavBar.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

const tooltip_sites = ['LinkedIn', 'GitHub', 'Letterboxd'];

export default function NavBar(props) {
  const [activeTheme, setActiveTheme] = useState(props.theme);

  const changeThemeNav = (event) => {
    if (event) {
      let new_theme = null;
      switch (event.target.value) {
        case 'Dark':
          new_theme = Dark;
          break;
        case 'Light':
          new_theme = Light;
          break;
        case 'B+W':
          new_theme = BW;
          break;
        case 'Mike':
          new_theme = MyFav;
          break;
        default:
          return;
      }
      setActiveTheme(new_theme);
      props.changeTheme(new_theme);
    }
  };

  // info: Height = 4rem
  return (
    <nav
      className={
        'fixed left-0 top-0 flex w-screen items-center justify-between px-3 py-3 sm:px-4 md:px-8 lg:px-12 xl:px-16' +
        activeTheme.nav.main_tw
      }>
      <div className='flex items-center space-x-4'>
        <img src={burger_png} alt='logo' className='mr-4 h-10 w-10' />
      </div>
      <div className='flex items-center'>
        {tooltip_sites.map((site) => (
          <SvgIcon key={site} site={site} style={activeTheme.nav} />
        ))}
        <select
          onChange={changeThemeNav}
          className={
            'ml-4 hidden cursor-pointer rounded-sm border-2 pb-1 pt-1 text-sm focus:border-current focus:ring-0 md:block' +
            activeTheme.nav.btn_tw
          }
          name='theme'
          defaultValue='Dark'>
          <option>Dark</option>
          <option>Light</option>
          <option>B+W</option>
          <option>Mike</option>
        </select>
        <button className='block md:hidden'>
          <svg className='h-8 w-8 fill-none' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>
    </nav>
  );
}
