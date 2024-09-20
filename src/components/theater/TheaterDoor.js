import React from 'react';

export default function TheaterDoor() {
  return (
    <>
      {/* LEFT DOOR */}
      <div className='bg-base-200 flex h-full w-1/6 flex-col border-b-2 border-[#242e22]'>
        {/* TOP */}
        <div className='to-primary border-x-6 h-1/2 w-full border-b-2 border-t-[1.5rem] border-[#39240C] bg-gradient-to-b from-[#dcd0a7d2]'></div>

        {/* HANDLE */}
        <div className='border-x-6 flex h-[12px] w-full border-x-[#39240C] bg-zinc-200'>
          <div className='ml-[62%] h-full w-[4%] bg-[#39240C]'></div>
          <div className='ml-[6%] h-full w-[4%] bg-[#39240C]'></div>
        </div>

        {/* BOTTOM */}
        <div
          className='bg-primary border-b-secondary border-6 w-full border-b-[10px] border-t-2 border-[#39240C]'
          style={{ height: 'calc(50% - 12px)' }}></div>
      </div>

      {/* RIGHT DOOR */}
      <div className='bg-base-200 flex h-full w-1/6 flex-col border-b-2 border-[#242e22]'>
        {/* TOP */}
        <div className='to-primary border-x-6 h-1/2 w-full border-b-2 border-t-[1.5rem] border-[#39240C] bg-gradient-to-b from-[#dcd0a7d2]'></div>

        {/* HANDLE */}
        <div className='border-x-6 flex h-[12px] w-full border-x-[#39240C] bg-zinc-200'>
          <div className='ml-[20%] h-full w-[4%] bg-[#39240C]'></div>
          <div className='ml-[6%] h-full w-[4%] bg-[#39240C]'></div>
        </div>

        {/* BOTTOM */}
        <div
          className='bg-primary border-b-secondary border-6 h-[46%] w-full border-b-[10px] border-t-2 border-[#39240C]'
          style={{ height: 'calc(50% - 12px)' }}></div>
      </div>
    </>
  );
}
