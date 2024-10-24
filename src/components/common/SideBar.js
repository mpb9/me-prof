import { Smiley } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

SideBar.propTypes = {
  cats: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default function SideBar(props) {
  const [theme] = useState(props.theme);

  const btn_theme = `w-full py-1 px-3 md:px-4 lg:px-5 border-b-[1px] border-x-[1px] text-center text-sm md:text-base lg:text-lg lowercase my-font-3270 hover:italic ${theme.sidebar.brdr} ${theme.sidebar.txt} ${theme.sidebar.bg}`;

  const scrollToCat = (newCat) => {
    let catId = '#' + newCat.name.toLowerCase();
    window.scrollTo({
      top: document.querySelector(catId).offsetTop - document.querySelector('#sidebar').offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div
      id='sidebar'
      className={`fixed top-14 ml-4 md:top-16 lg:top-20 left-0 h-auto max-h-[80vh] w-14 sm:w-[12vw] lg:w-[11vw] flex flex-col justify-center items-center ${theme.nav.txt}`}>
      <div className={`flex flex-col justify-center items-center border-t-[1px] ${theme.sidebar.brdr}`}>
        {props.cats.map((category) => (
          <button key={category.name} onClick={() => scrollToCat(category)} className={btn_theme}>
            {category.name}
          </button>
        ))}
        <div
          className={`flex flex-col justify-center items-center border-[1px] mt-8 px-2 rounded-full cursor-default ${theme.sidebar.svg} ${theme.sidebar.bg} ${theme.sidebar.brdr}`}>
          <div className={'w-full pt-2 md:pt-3 px-3 text-xl md:px-4 md:text-2xl text-center inline-flex'}>
            <Smiley weight='fill' />
          </div>
          <div className={`text-3xs md:text-xs text-center leading-5 pb-2 md:pb-4 md:pt-1 italic ${theme.sidebar.txt}`}>
            by me
          </div>
        </div>
      </div>
    </div>
  );
}
