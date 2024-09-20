import React from 'react';

export default function BoxOffice() {
  return (
    <div className='border-b-secondary h-full w-1/3 border-x-2 border-[#36220c] bg-[#321e0c]'>
      {/* top upper brim */}
      <div className='flex h-[0.4rem] w-full'>
        {/* left */}
        <div className='diag-45-bg z-20 w-[30%]' style={{ height: 'calc(100% + 0.25rem)' }}></div>
        {/* middle */}
        <div className='z-30 flex w-[40%] flex-col' style={{ height: 'calc(100% + 0.25rem)' }}>
          <div className='-ml-[12%] h-[0.29rem] w-[124%] bg-[#d0ccab]'></div>
          <div className='-ml-[12%] w-[124%] bg-[#e0e0db]' style={{ height: 'calc(100% - 0.25rem)' }}></div>
        </div>
        {/* right */}
        <div className='diag-315-bg z-20 w-[30%]' style={{ height: 'calc(100% + 0.25rem )' }}></div>
      </div>

      {/* top middle */}
      <div className='mt-[0.25rem] flex h-[2rem] w-full'>
        {/* left */}
        <div className='w-[25.5%] bg-[#d7d5cc]' style={{ height: 'calc(100% )' }}></div>
        {/* middle */}
        <div className='text-md flex h-full w-[50%] items-start justify-center bg-[#E0E0DB] text-[#36100c]'>
          TICKETS
        </div>
        {/* right */}
        <div className='z-20 w-[25.5%] bg-[#e5e5da]' style={{ height: 'calc(100%)' }}></div>
      </div>

      {/* top lower brim */}
      <div className='flex h-[0.2rem] w-full justify-between'>
        {/* left */}
        <div
          className='triangle-tl-bg z-20 rounded-bl-sm border-l-[0.75rem] border-[#d7d5cc]'
          style={{ height: 'calc(100% + 0.25rem)', width: 'calc(25% + 0.5rem)' }}></div>

        {/* middle */}
        <div
          className='bg-[#000], z-30 flex flex-col border-x-[1px] border-t-2 border-t-[#D0CCAB]'
          style={{
            height: 'calc(100% + 0.875rem)',
            width: 'calc(50%)',
          }}></div>

        {/* right */}
        <div
          className='triangle-tr-bg z-20 rounded-br-sm border-r-[0.75rem] border-[#E5E5DA]'
          style={{ height: 'calc(100% + 0.25rem )', width: 'calc(25% + 0.5rem)' }}></div>
      </div>

      {/* main */}
      <div
        className='border-b-secondary mx-2 -mt-[1px] flex border-b-[1px] bg-[#4a3939]'
        style={{ height: 'calc(100% - 3.0rem)', width: 'calc(100% - 1rem)' }}>
        {/* left */}
        <div className='z-10 h-full w-1/4 origin-top-left translate-y-1 skew-y-12 border-l-[2px] bg-gradient-to-b from-[#4a3939] to-[#e5deca]'>
          <div className='h-[5%] w-full'>
            <div className='h-full w-full border-l-4 border-l-[#34360c] blur-sm'></div>
          </div>
          <div className='flex h-[55%] w-full border-b-4 border-b-[#36100c]'>
            <div className='h-full w-full border-b-4 border-l-4 border-b-[#36100c] border-l-[#34360c] border-r-[#36220c] blur-sm'></div>
          </div>
          <div className='h-[40%] w-full border-t-4 border-amber-400 bg-[#36220c]'></div>
        </div>

        {/* middle */}
        <div
          className='z-10 flex w-1/2 translate-y-3.5 flex-col justify-between bg-gradient-to-b from-[#4a3939] to-[#e5deca]'
          style={{ height: 'calc(100% + 1px)' }}>
          <div className='h-[5%] w-full border-x-[1px] border-[#e5e7eb]'></div>
          <div className='border-b-6 h-[55%] w-full border-x-[1px] border-[#e5e7eb] border-b-amber-400 pb-6'>
            <div className='flex h-full w-full items-end justify-center'>
              <div className='lined-h-bg h-4 w-4 rounded-full border-[2px] border-[#d4d4d8] bg-repeat'></div>
            </div>
          </div>

          <div className='border-t-3 h-[40%] w-full border-amber-400 bg-[#533c20]'></div>
        </div>

        {/* right */}
        <div className='z-10 h-full w-1/4 origin-top-right translate-y-1 -skew-y-12 border-r-[2px] bg-gradient-to-b from-[#4a3939] to-[#e5deca]'>
          <div className='h-[5%] w-full'>
            <div className='h-full w-full border-r-4 border-r-[#34360c] blur-sm'></div>
          </div>
          <div className='h-[55%] w-full border-b-4 border-b-[#36100c]'>
            <div className='h-full w-full border-b-4 border-r-4 border-b-[#36100c] border-r-[#34360c] blur-sm'></div>
          </div>
          <div className='h-[40%] w-full border-t-4 border-amber-400 bg-[#705436]'></div>
        </div>
      </div>
    </div>
  );
}
