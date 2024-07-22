import React from 'react';

export default function TheaterEntrance() {
  return (
    <div className='bg-base-200 flex h-1/2 w-screen'>
      <div
        className='h-min-full bg-neutral w-[24%]'
        style={{ clipPath: 'polygon(12% 0, 100% 10%, 100% 100%, 0 100%, 0 0)' }}></div>
      <div className='bg-base-200 h-min-full w-[52%]'></div>
      <div
        className='h-min-full bg-neutral w-[24%]'
        style={{ clipPath: 'polygon(0 14%, 100% 0, 100% 100%, 0 100%)' }}></div>
    </div>
  );
}
