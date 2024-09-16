import React from 'react';
import MarqueeMain from './MarqueeMain';

export default function Marquee() {
  return (
    <>
      {/* Sky  */}
      <div className='h-1/10 bg-gradient-to-t from-yellow-100 to-[#2c6277]'>
        {/* Name */}
        <div
          className='shadow-neon-top fixed z-[21] h-[9.5%] w-[54%] cursor-default rounded-t-xl bg-[#3A2A00] pb-1 text-center ring-2 ring-inset ring-[#f2f28b] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
          style={{ top: '15%', left: '23%' }}>
          <div
            className='my-font-marquee-title text-shadow-neon-orange shadow-neon-yellow-bottom inline-flex w-full items-center justify-center pb-1 text-[#ff800d]'
            style={{ height: 'calc(100%)' }}>
            Michael Beebe
          </div>
        </div>

        {/* Pillars */}
        <div
          className='marquee-pillar-bg fixed z-[22] h-[34%] w-[2.5em] rounded-b-xl rounded-tl-3xl rounded-tr-xl'
          style={{ top: '19%', left: '0%' }}></div>
        <div
          className='marquee-pillar-bg fixed z-[22] h-[38%] w-[3.5em] rounded-b-xl rounded-tl-3xl rounded-tr-xl'
          style={{ top: '14%', left: '23%' }}></div>

        {/* Top Piece */}
        <div
          className='bg-secondary w-1/10 h-1/10 border-x-6 fixed rounded-t-full border-t-4 border-[#3A2A00]'
          style={{ left: '45%', top: '0%' }}>
          <div className='flex h-full w-full pb-4 pt-2'>
            <div className='bg-burger-boy h-full w-full bg-contain bg-center bg-no-repeat'></div>
          </div>
        </div>

        {/* Spot Lights */}
        <div
          className='bg-dot-1-s-1-amber-400 w-1/8 border-6 fixed z-20 h-[14.5%] border-r-8 border-[#3A2A00] bg-[#3A2A00]'
          style={{ top: '10%', left: '28.5%' }}></div>
        <div
          className='bg-dot-1-s-1-amber-400 border-t-6 fixed z-20 h-[14.5%] w-[16%] border-8 border-[#3A2A00] bg-[#3A2A00]'
          style={{ top: '8.5%', left: '42%' }}></div>
        <div
          className='bg-dot-1-s-1-amber-400 w-1/8 border-6 fixed z-20 h-[14.5%] border-l-8 border-[#3A2A00] bg-[#3A2A00]'
          style={{ top: '10%', left: '59%' }}></div>

        {/* Pillars */}
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
          <MarqueeMain text={'ABOUT'} />
          <div className='bg-primary string-light-border shadow-neon-top h-3/5 w-full border-b-[1rem] p-4 text-stone-800'>
            PERSONAL INFO
          </div>
        </div>

        {/* Marquee Center */}
        <div className='static z-10 h-2/3 w-1/2'>
          <div className='h-full w-full'>
            <MarqueeMain text={'NOW SHOWING...'} />

            <div className='bg-primary string-light-border shadow-neon-top h-3/5 w-full border-b-[1rem] p-4 text-stone-800'>
              RESUME, ETC
            </div>
          </div>
        </div>

        {/* Marquee Right */}
        <div className='bg-clip-border-marquee-r shadow-neon-top h-2/3 w-1/4 origin-top-left skew-y-2'>
          <MarqueeMain text={'CATALOG'} />

          <div className='bg-primary shadow-neon-top string-light-border h-3/5 w-full rounded-br-2xl border-b-[1rem] p-4 text-stone-800'>
            WHAT IM UP TO
          </div>
        </div>
      </div>
    </>
  );
}
