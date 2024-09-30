import React from 'react';

export default function TheaterDoor() {
  return (
    <div className='flex h-full w-1/3 border-t-[0.75rem] border-t-slate-300'>
      {/* LEFT DOOR */}
      <div className='bg-base-200 flex h-full w-1/2 border-b-2 border-t-4 border-[#242e22] border-t-slate-300'>
        <div className='h-full w-[10%] bg-[#39240C]'></div>
        <div className='h-full w-[75%] bg-gradient-to-b from-[#dcd0a7d2] to-primary border-b-8 border-b-secondary border-t-[1rem] border-t-[#39240C]'></div>
        <div className='flex h-full w-[15%] items-center justify-center bg-[#39240C] pt-4'>
          <div className='h-1/3 w-1/4 rounded-sm bg-[#f0f0f0] shadow-sm shadow-black'></div>
        </div>
      </div>

      {/* RIGHT DOOR */}
      <div className='bg-base-200 flex h-full w-1/2 border-b-2 border-t-4 border-[#242e22] border-t-slate-300'>
        <div className='flex h-full w-[15%] items-center justify-center bg-[#39240C] pt-4'>
          <div className='h-1/3 w-1/4 rounded-sm bg-[#f0f0f0] shadow-sm shadow-black'></div>
        </div>
        <div className='h-full w-[75%] bg-gradient-to-b from-[#dcd0a7d2] to-primary border-b-8 border-b-secondary border-t-[1rem] border-t-[#39240C]'></div>
        <div className='h-full w-[10%] bg-[#39240C]'></div>
      </div>
      {/* <div className='bg-base-200 flex h-full w-1/2 flex-col border-b-2 border-[#242e22]'>
        <div className='to-primary border-x-6 h-1/2 w-full border-b-2 border-t-[1.5rem] border-[#39240C] bg-gradient-to-b from-[#dcd0a7d2]'></div>

        <div className='border-x-6 flex h-[12px] w-full border-x-[#39240C] bg-zinc-200'>
          <div className='ml-[20%] h-full w-[4%] bg-[#39240C]'></div>
          <div className='ml-[6%] h-full w-[4%] bg-[#39240C]'></div>
        </div>

        <div
          className='bg-primary border-b-secondary border-6 h-[46%] w-full border-b-[10px] border-t-2 border-[#39240C]'
          style={{ height: 'calc(50% - 12px)' }}></div>
      </div> */}
    </div>
  );
}
