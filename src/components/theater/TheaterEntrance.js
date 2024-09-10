import React from 'react';

export default function TheaterEntrance() {
  return (
    <>
      <div className='bg-base-200 border-x-3-rem brick-wall-border flex h-2/5 w-screen'>
        <div
          className='h-min-full bg-neutral w-1/4'
          style={{ clipPath: 'polygon(16% 0, 100% 10%, 100% 100%, 0 100%, 0 0)' }}></div>
        <div className='bg-base-200 h-min-full w-1/2'></div>
        <div
          className='bg-neutral h-full w-1/4'
          style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%, 0 84%)' }}></div>
      </div>

      {/* Sidewalk */}
      <div className='h-1/10 bg-[#c29965]'></div>
    </>
  );
}
