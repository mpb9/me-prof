import PropTypes from 'prop-types';
import burger_png from '../../static/imgs/iconography/burgerboy.png';
import SvgIcon from './SvgIcon';
import ThemePicker from './ThemePicker';

NavBar.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

const tooltip_sites = ['LinkedIn', 'GitHub', 'Letterboxd'];

export default function NavBar(props) {
  return (
    <nav
      className={
        'fixed left-0 top-0 flex w-screen items-center justify-between px-3 py-3 sm:px-4 md:px-8 lg:px-12 xl:px-16' +
        props.theme.nav.main_tw
      }>
      <div className='flex items-center space-x-4'>
        <img src={burger_png} alt='logo' className='mr-4 h-10 w-10' />
      </div>
      <div className='flex items-center'>
        {tooltip_sites.map((site) => (
          <SvgIcon key={site} site={site} style={props.theme.nav} />
        ))}
        <ThemePicker changeTheme={props.changeTheme} theme={props.theme} themeName={props.themeName} />
      </div>
    </nav>
  );
}
