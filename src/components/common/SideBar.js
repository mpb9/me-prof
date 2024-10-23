import { PersonSimple } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

SideBar.propTypes = {
  cats: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default function SideBar(props) {
  const [theme] = useState(props.theme);

  const btn_theme = `w-full py-1 px-5 border-b-[1px] border-x-[1px] text-center text-lg lowercase my-font-3270 hover:italic ${theme.sidebar.brdr} ${theme.sidebar.txt} ${theme.sidebar.bg}`;

  const scrollToCat = (newCat) => {
    let catId = '#' + newCat.name.toLowerCase();
    window.scrollTo({
      top: document.querySelector(catId).offsetTop - 84,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed top-12 ml-4 sm:top-14 md:top-16 lg:top-20 left-0 h-auto max-h-[80vh] w-[10vw] flex flex-col justify-center items-center ${theme.nav.txt}`}>
      <div className={`flex flex-col justify-center items-center border-t-[1px] ${theme.sidebar.brdr}`}>
        {props.cats.map((category) => (
          <button key={category.name} onClick={() => scrollToCat(category)} className={btn_theme}>
            {category.name}
          </button>
        ))}
        <div
          className={`flex flex-col justify-center items-center border-[1px] mt-6 px-2 cursor-default ${theme.sidebar.svg} ${theme.sidebar.bg} ${theme.sidebar.brdr}`}>
          <div className={'w-full pt-2 px-4 text-xl text-center inline-flex'}>
            <PersonSimple weight='bold' />
          </div>
          <div className={`text-xs text-center leading-5 pt-1 pb-1 italic ${theme.sidebar.txt}`}>mine</div>
        </div>
      </div>
    </div>
  );
}
