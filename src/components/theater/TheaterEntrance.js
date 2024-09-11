import React from 'react';

export default function TheaterEntrance() {
  return (
    <>
      <div className='bg-base-100 bg-grid-2-s-1-[#A5B4FC44] brick-wall-border flex h-2/5 w-screen border-x-[2.75rem]'>
        {/* Left Wall */}
        <div
          className='h-min-full from-base-200 to-base-100 border-base-200 w-[28%] border-l-[12px] bg-gradient-to-tr'
          style={{ clipPath: 'polygon(18% 0, 100% 10%, 100% 100%, 0 100%, 0 0)' }}></div>
        {/* Entrance */}
        <div className='inline-flex h-full w-[44%] items-end'>
          <div className='bg-base-100 w-full' style={{ height: '90%' }}></div>
        </div>
        {/* Right Wall */}
        <div
          className='from-base-200 to-base-100 border-base-200 h-full w-[28%] border-r-[12px] bg-gradient-to-tl'
          style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%, 0 82%)' }}></div>
      </div>

      {/* Sidewalk */}
      <div className='h-1/10 bg-[#b4a87f]'></div>
    </>
  );
}
