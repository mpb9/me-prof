import React from 'react';

export default function TheaterDoor() {
  return (
    <>
      <div className='border-base-200 bg-base-200 flex h-full w-1/6 flex-col border-2 border-r-0'>
        <div className='border-6 to-primary h-1/2 w-full rounded-tl-3xl border-b-2 border-yellow-500 bg-gradient-to-b from-[#dcd0a7d2]'></div>
        <div className='border-x-6 flex h-[5%] w-full border-x-yellow-500 bg-zinc-300'>
          <div className='ml-[62%] h-full w-[6%] bg-yellow-500'></div>
          <div className='ml-[6%] h-full w-[6%] bg-yellow-500'></div>
        </div>
        <div className='bg-primary border-6 h-[45%] w-full border-b-0 border-t-2 border-yellow-500'></div>
      </div>
      <div className='border-base-200 bg-base-200 flex h-full w-1/6 flex-col border-2 border-l-0'>
        <div className='border-6 to-primary h-1/2 w-full rounded-tr-3xl border-b-2 border-yellow-500 bg-gradient-to-b from-[#dcd0a7d2]'></div>
        <div className='border-x-6 flex h-[5%] w-full border-x-yellow-500 bg-zinc-300'>
          <div className='ml-[20%] h-full w-[6%] bg-yellow-500'></div>
          <div className='ml-[6%] h-full w-[6%] bg-yellow-500'></div>
        </div>
        <div className='bg-primary border-6 h-[45%] w-full border-b-0 border-t-2 border-yellow-500'></div>
      </div>
    </>
  );
}
