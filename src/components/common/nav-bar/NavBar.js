import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
import { current_page, link_to_home, link_to_page } from './NavBarLinks';

NavBar.propTypes = {
  theme: PropTypes.object.isRequired,
  themeName: PropTypes.string.isRequired,
};

const tooltip_sites = ['Dump N Chase', 'Graphics Playground', 'Letterboxd', 'Spotify', 'GitHub', 'LinkedIn'];

export default function NavBar(props) {
  return (
    <nav
      className={`fixed left-0 top-0 flex w-screen items-center justify-between px-3 pt-2 pb-2 sm:px-4 lg:px-6 xl:pr-8 border-y-[2px] bg-opacity-60 ${props.theme.nav.brdr} ${props.theme.nav.txt} ${props.theme.nav.bg}`}>
      <div className='flex items-center'>
        {(() => {
          switch (props.themeName) {
            case 'stuff':
              return (
                <div className={`flex items-center space-x-3 md:space-x-4 lg:space-x-5 ${props.theme.main.txt}`}>
                  {link_to_home}
                  <div className={`pl-1 pr-3 bg-opacity-90 ${props.theme.nav.btn} ${props.theme.nav.txt}`}>
                    {current_page(props.themeName)}
                  </div>
                  {link_to_page('dev')}
                  {link_to_page('new-tab')}
                </div>
              );
            case 'dev':
              return (
                <div className={`flex items-center space-x-4 underline font-black ${props.theme.main.txt}`}>
                  {link_to_home}
                  {link_to_page('stuff')}
                  <div className={`pl-1 pr-3 bg-opacity-90 ${props.theme.nav.btn} ${props.theme.nav.txt}`}>
                    {current_page(props.themeName)}
                  </div>
                  {link_to_page('new-tab')}
                </div>
              );
            case 'new-tab':
              return (
                <div className={`flex items-center space-x-4 underline font-black ${props.theme.main.txt}`}>
                  {link_to_home}
                  {link_to_page('stuff')}
                  {link_to_page('dev')}
                  <div className={`pl-1 pr-3 bg-opacity-90 ${props.theme.nav.btn} ${props.theme.nav.txt}`}>
                    {current_page(props.themeName)}
                  </div>
                </div>
              );
            default:
              return null;
          }
        })()}
      </div>
      <div className='sm:flex items-center space-x-1 mr-0 md:mr-2 md:space-x-2 lg:space-x-3 xl:space-x-4 xl:mr-4 hidden'>
        {tooltip_sites.map((site) => (
          <SvgIcon key={site} site={site} style={props.theme.nav} />
        ))}
      </div>
    </nav>
  );
}
