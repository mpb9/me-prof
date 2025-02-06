import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
import { current_page, link_to_home, link_to_page } from './NavBarLinks';

NavBar.propTypes = {
  theme: PropTypes.object.isRequired,
  themeName: PropTypes.string.isRequired,
};

const tooltip_sites = [
  'Dump N Chase',
  'Graphics Playground',
  'Custom Fantasy Football Website',
  'Letterboxd Profile',
  'Spotify Profile',
  'GitHub Profile',
  'LinkedIn Profile',
];

export default function NavBar(props) {
  return (
    <nav
      className={`fixed z-20 left-0 top-0 flex w-screen items-center justify-between px-3 pt-2 pb-2 sm:px-4 lg:px-6 xl:pr-8 border-y-[2px] bg-opacity-95 ${props.theme.nav.brdr} ${props.theme.nav.txt} ${props.theme.nav.bg}`}>
      <div className='flex items-center'>
        <div
          className={`flex items-center text-base sm:text-sm md:text-lg space-x-3 md:space-x-4 lg:space-x-5 ${props.theme.main.txt}`}>
          {link_to_home}
          {props.themeName === 'stuff' ? (
            <div className={`pl-1 pr-2 bg-opacity-90 ${props.theme.nav.btn} ${props.theme.nav.txt}`}>
              {current_page(props.themeName)}
            </div>
          ) : (
            link_to_page('stuff')
          )}
          {props.themeName === 'dev' ? (
            <div className={`pl-1 pr-2 bg-opacity-90 ${props.theme.nav.btn} ${props.theme.nav.txt}`}>
              {current_page(props.themeName)}
            </div>
          ) : (
            link_to_page('dev')
          )}
        </div>
      </div>
      <div className='items-center hidden space-x-2 sm:flex md:space-x-3 lg:space-x-4'>
        {tooltip_sites.map((site) => (
          <SvgIcon key={site} site={site} style={props.theme.nav} />
        ))}
      </div>
    </nav>
  );
}
