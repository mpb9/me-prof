import PropTypes from 'prop-types';
import { useState } from 'react';
import { BW, Dark, Dev, Light, MyFav, NewTab, Stuff } from '../../data/Themes';

ThemePicker.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default function ThemePicker(props) {
  const [activeTheme, setActiveTheme] = useState(props.theme);

  const changeThemeNav = (event) => {
    if (event) {
      let new_theme = null;
      switch (event.target.value) {
        case 'dark':
          new_theme = Dark;
          break;
        case 'light':
          new_theme = Light;
          break;
        case 'b+w':
          new_theme = BW;
          break;
        case 'mike':
          new_theme = MyFav;
          break;
        case 'stuff':
          new_theme = Stuff;
          break;
        case 'dev':
          new_theme = Dev;
          break;
        case 'new-tab':
          new_theme = NewTab;
          break;
        default:
          return;
      }
      setActiveTheme(new_theme);
      props.changeTheme(new_theme);
    }
  };

  return (
    <>
      <select
        onChange={changeThemeNav}
        className={
          'ml-4 hidden cursor-pointer rounded-sm border-2 pb-1 pt-1 text-sm focus:border-current focus:ring-0 md:block' +
          activeTheme.nav.btn_tw
        }
        name='theme'
        defaultValue={props.themeName}>
        <option>dark</option>
        <option>light</option>
        <option>b+w</option>
        <option>mike</option>
        <option>stuff</option>
        <option>dev</option>
        <option>new-tab</option>
      </select>

      <button className='block md:hidden'>
        <svg className='h-8 w-8 fill-none' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M4 6h16M4 12h16m-7 6h7' />
        </svg>
      </button>
    </>
  );
}
