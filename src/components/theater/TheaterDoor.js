import React from 'react';

export default function TheaterDoor() {
  return (
    <div className='flex h-full w-1/3 border-t-[0.75rem] border-t-slate-300'>
      {/* LEFT DOOR */}
      <div className='bg-base-200 flex h-full w-1/2 border-b-2 border-t-4 border-[#242e22] border-t-slate-300'>
        <div className='h-full w-[10%] bg-[#39240C]' />
        <div className='h-full w-[75%] bg-gradient-to-b from-[#dcd0a7d2] to-primary border-b-8 border-b-secondary border-t-[1rem] border-t-[#39240C]' />
        <div className='flex h-full w-[15%] items-center justify-center bg-[#39240C] pt-4'>
          <div className='h-1/3 w-1/4 rounded-sm bg-[#f0f0f0] shadow-sm shadow-black' />
        </div>
      </div>

      {/* RIGHT DOOR */}
      <div className='bg-base-200 flex h-full w-1/2 border-b-2 border-t-4 border-[#242e22] border-t-slate-300'>
        <div className='flex h-full w-[15%] items-center justify-center bg-[#39240C] pt-4'>
          <div className='h-1/3 w-1/4 rounded-sm bg-[#f0f0f0] shadow-sm shadow-black' />
        </div>
        <div className='h-full w-[75%] bg-gradient-to-b from-[#dcd0a7d2] to-primary border-b-8 border-b-secondary border-t-[1rem] border-t-[#39240C]' />
        <div className='h-full w-[10%] bg-[#39240C]' />
      </div>
    </div>
  );
}
