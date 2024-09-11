import React from 'react';
import MarqueeMain from './MarqueeMain';

export default function Marquee() {
  return (
    <>
      {/* Sky  */}
      <div className='h-1/10 bg-gradient-to-t from-yellow-100 to-[#2c6277]'>
        <div
          className='shadow-dim my-font-marquee-title text-shadow-neon-orange fixed z-[21] h-[9.5%] w-[54%] cursor-default rounded-t-lg border-b-2 border-[#f2f28b] bg-[#3A2A00] text-center text-7xl text-[#ff800d]'
          style={{ top: '15%', left: '23%' }}>
          Michael Beebe
        </div>
        <div
          className='marquee-pillar-bg fixed z-[22] h-[34%] w-[2.5em] rounded-b-xl rounded-tl-3xl rounded-tr-xl'
          style={{ top: '19%', left: '0%' }}></div>
        <div
          className='marquee-pillar-bg fixed z-[22] h-[38%] w-[3.5em] rounded-b-xl rounded-tl-3xl rounded-tr-xl'
          style={{ top: '14%', left: '23%' }}></div>
        <div className='bg-secondary w-1/10 h-1/10 fixed rounded-t-full' style={{ left: '45%', top: '0%' }}></div>
        <div
          className='bg-secondary fixed z-20 h-[14.5%] w-1/6 border-2 border-white'
          style={{ top: '10%', left: '41.667%' }}></div>
        <div
          className='marquee-pillar-bg shadow-dim fixed z-[22] h-[38%] w-[3.5em] rounded-b-xl rounded-tl-xl rounded-tr-3xl'
          style={{ top: '14%', right: '23%' }}></div>
        <div
          className='marquee-pillar-bg shadow-dim fixed z-[22] h-[34%] w-[2.5em] rounded-b-xl rounded-tl-xl rounded-tr-3xl'
          style={{ top: '19%', right: '0%' }}></div>
      </div>

      <div className='bg-brick-wall relative z-10 flex h-2/5 w-screen columns-3 items-end space-x-0 border-t-8 border-[#eee3bd] border-opacity-40 bg-repeat px-4 text-center'>
        {/* Marquee Left */}
        <div className='bg-base-300 shadow-neon-top h-2/3 w-1/4 origin-top-right -skew-y-2'>
          <MarqueeMain text={'About'} />
          <div className='bg-primary string-light-border shadow-neon-top h-3/5 w-full border-b-[1rem] p-4'>2</div>
        </div>

        {/* Marquee Center */}
        <div className='static z-10 h-2/3 w-1/2'>
          <div className='h-full w-full'>
            <MarqueeMain text={'Now Playing...'} />

            <div className='bg-primary string-light-border shadow-neon-top h-3/5 w-full border-b-[1rem] p-4'>
              RESUME, ETC
            </div>
          </div>
        </div>

        {/* Marquee Right */}
        <div className='bg-clip-border-marquee-r shadow-neon-top h-2/3 w-1/4 origin-top-left skew-y-2'>
          <MarqueeMain text={'Projects'} />

          <div className='bg-primary text-primary-content shadow-neon-top string-light-border h-3/5 w-full rounded-br-2xl border-b-[1rem] p-4'>
            2
          </div>
        </div>
      </div>
    </>
  );
}
