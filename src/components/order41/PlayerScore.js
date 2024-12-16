import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
PlayerScore.propTypes = {
  id: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  pts: PropTypes.number.isRequired,
  pos: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
};
export default function PlayerScore(props) {
  const [color, setColor] = useState('bg-stone-700');
  const colors = {
    QB: '#ff757cDD',
    RB: '#98FB98DD',
    WR: '#B0E0E6DD',
    TE: '#ffa973DD',
    IDP: '#AED998DD',
    DEF: '#FFD700DD',
    K: '#a39bfcEE',
  };

  useEffect(() => {
    const color = props.id % 2 === 0 ? 'bg-stone-700' : 'bg-stone-800';
    setColor(color);
  }, [props]);

  const getColor = (pos) => {
    if (colors[pos]) return colors[pos];
    return '#f59cff';
  };
  return (
    <div
      key={props.id}
      className='flex bg-stone-700 items-center overflow-hidden justify-center w-full border-2 border-b-0 border-stone-600 sm:text-[0.85rem] lg:text-base'>
      <div className='flex items-baseline flex-1 overflow-hidden text-left text-stone-100 whitespace-nowrap'>
        <span className='flex-none w-10 mr-1 text-sm text-center' style={{ color: getColor(props.pos) }}>
          {props.pos}
        </span>
        <span className='font-mono text-lg md:text-base xl:text-lg'>
          {props.first_name[0]} {props.last_name}
        </span>
        <span className='pl-2 overflow-hidden text-xs text-stone-400'>({props.team})</span>
      </div>
      <div className='w-[64px] sm:w-[56px] lg:w-[68px] py-[5px] bg-stone-900 tracking-wider text-[#AED998] font-mono'>
        {props.pts}
      </div>
    </div>
  );
}
