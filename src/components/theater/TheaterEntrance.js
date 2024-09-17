import React from 'react';
import Sidewalk from './Sidewalk.js';
import TheaterDoor from './TheaterDoor.js';

export default function TheaterEntrance() {
  return (
    <>
      <div className='bg-base-100 bg-grid-2-s-1-[#A5B4FC44] brick-wall-border flex h-2/5 w-screen border-x-[2.75rem]'>
        <div
          className='from-base-200 to-base-100 border-base-200 flex h-full w-[26%] items-center justify-center space-x-7 border-l-[32px] bg-gradient-to-tr pb-2'
          style={{ clipPath: 'polygon(18% 0, 100% 10%, 100% 100%, 0 100%, 0 0)' }}>
          {/* GRAPHIC PLAYGROUND */}
          <div
            className='bg-graphics-poster-wide mb-3 h-[58%] w-[35.15%] cursor-pointer bg-no-repeat hover:animate-pulse'
            style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0 100%)', backgroundSize: '100% 100%' }}>
            <a href='https://graphics-playground.com/' target='_blank' className='inline-block h-full w-full' />
          </div>
          {/* COOL STUFF */}
          <div
            className='bg-stuff-poster-flipped-wide h-[55%] w-1/3 cursor-pointer bg-no-repeat hover:animate-pulse'
            style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0 100%)', backgroundSize: '100% 100%' }}></div>
        </div>

        {/* Entrance */}
        <div className='inline-flex h-full w-[48%] items-end'>
          <div className='bg-base-100 flex w-full flex-col' style={{ height: '90%' }}>
            {/* windows */}
            <div className='flex h-1/4 w-full bg-gradient-to-b from-[#fff3c522] to-[#fff3c5aa]'>
              <div className='h-full w-2/5 bg-gradient-to-b from-[#fff3c522] to-[#fff3c5aa] blur-sm'></div>
              <div className='bg-secondary border-base-200 flex h-full w-1/5 items-center border-8 border-b-0 p-2 text-center'>
                Box Office
              </div>

              <div className='h-full w-2/5 bg-gradient-to-b from-[#fff3c522] to-[#fff3c5aa] blur-sm'></div>
            </div>
            {/* doors */}
            <div className='flex h-3/4 w-full items-center justify-center'>
              <TheaterDoor />
              <div className='border-base-200 border-6 h-full w-1/3'></div>
              <TheaterDoor />
            </div>
          </div>
        </div>

        <div
          className='from-base-200 to-base-100 border-base-200 flex h-full w-[26%] items-center justify-center space-x-7 border-r-[32px] bg-gradient-to-tl pb-2'
          style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%, 0 82%)' }}>
          {/* DEV STUFF */}
          <div
            className='bg-dev-poster-flipped-wide h-[55%] w-1/3 cursor-pointer bg-no-repeat hover:animate-pulse'
            style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)', backgroundSize: '100% 100%' }}></div>
          {/* DUMP+CHASE */}
          <div
            className='bg-dnc-poster-wide mb-3 h-[58%] w-[35.15%] cursor-pointer bg-no-repeat hover:animate-pulse'
            style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)', backgroundSize: '100% 100%' }}>
            <a href='https://dump-n-chase.com/' target='_blank' className='inline-block h-full w-full' />
          </div>
        </div>
      </div>

      <Sidewalk />
    </>
  );
}
