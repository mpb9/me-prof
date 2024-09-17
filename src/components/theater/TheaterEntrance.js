import React from 'react';
import Sidewalk from './Sidewalk.js';

export default function TheaterEntrance() {
  return (
    <>
      <div className='bg-base-100 bg-grid-2-s-1-[#A5B4FC44] brick-wall-border flex h-2/5 w-screen border-x-[2.75rem]'>
        {/* Left Wall */}
        <div
          className='from-base-200 to-base-100 border-base-200 flex h-full w-[26%] items-center justify-center space-x-7 border-l-[32px] bg-gradient-to-tr pb-2'
          style={{ clipPath: 'polygon(18% 0, 100% 10%, 100% 100%, 0 100%, 0 0)' }}>
          {/* GRAPHIC PLAYGROUND */}
          <div
            className='bg-graphics-poster-wide mb-3 h-[58%] w-[35.15%] cursor-pointer bg-contain bg-no-repeat hover:animate-pulse'
            style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0 100%)' }}></div>
          {/* COOL STUFF */}
          <div
            className='bg-stuff-poster-flipped-wide h-[55%] w-1/3 cursor-pointer bg-contain bg-no-repeat hover:animate-pulse'
            style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0 100%)' }}></div>
        </div>

        {/* Entrance */}
        <div className='inline-flex h-full w-[48%] items-end'>
          <div className='bg-base-100 w-full' style={{ height: '90%' }}></div>
        </div>

        {/* Right Wall */}
        <div
          className='from-base-200 to-base-100 border-base-200 flex h-full w-[26%] items-center justify-center space-x-7 border-r-[32px] bg-gradient-to-tl pb-2'
          style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%, 0 82%)' }}>
          {/* DEV STUFF */}
          <div
            className='bg-dev-poster-flipped-wide h-[55%] w-1/3 cursor-pointer bg-contain bg-no-repeat hover:animate-pulse'
            style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)' }}></div>
          {/* DUMP+CHASE */}
          <div
            className='bg-dnc-poster-wide mb-3 h-[58%] w-[35.15%] cursor-pointer bg-contain bg-no-repeat hover:animate-pulse'
            style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>
      </div>

      <Sidewalk />
    </>
  );
}
