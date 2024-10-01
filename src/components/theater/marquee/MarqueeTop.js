import React from 'react';

export default function MarqueeTop() {
  return (
    <div
      className='top-piece-bg w-1/10 h-1/10 border-x-6 fixed rounded-t-full border-t-4 border-[#3A2A00]'
      style={{ left: '45%', top: '0%' }}>
      <div className='flex h-full w-full pb-[0.8rem] pt-1 hover:h-[120%] hover:pb-0'>
        <div className='bg-burger-boy h-full w-full bg-contain bg-center bg-no-repeat hover:animate-bounce' />
      </div>
    </div>
  );
}
