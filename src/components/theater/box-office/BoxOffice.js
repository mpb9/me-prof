import React, { useState } from 'react';
import BoxOfficeTop from './BoxOfficeTop';

export default function BoxOffice() {
  const [ticketExchange, setBoothWidth] = useState(0);

  const skew12Adjust = 2 / Math.tan(12 * (Math.PI / 180));

  return (
    <div className='h-full w-1/3 bg-gradient-to-b from-slate-300 from-[3rem] to-[#36220c] to-[3rem]' on>
      <BoxOfficeTop />

      <div
        className='border-b-secondary mx-2 -mt-[1px] flex border-b-[1px] bg-[#4a3939]'
        style={{ height: 'calc(100% - 3.0rem)', width: 'calc(100% - 1rem)' }}>
        {/* left */}
        <div className='z-10 h-full w-1/4 origin-top-left translate-y-1 skew-y-12 border-l-[2px] bg-gradient-to-b from-[#4a3939] to-[#e5deca]'>
          <div className='h-[5%] w-full'>
            <div className='h-full w-full border-l-4 border-l-[#34360c] blur-sm' />
          </div>
          <div className='flex h-[55%] w-full border-b-4 border-b-[#36100c]'>
            <div className='h-full w-full border-b-4 border-l-4 border-b-[#36100c] border-l-[#34360c] border-r-[#36220c] blur-sm' />
          </div>
          <div className='h-[40%] w-full border-t-4 border-amber-400 bg-[#36220c]' />
        </div>

        {/* middle */}
        <div
          className='z-10 flex w-1/2 translate-y-1 flex-col justify-center bg-gradient-to-b from-[#4a3939] to-[#e5deca]'
          style={{ height: 'calc(100% + 11px)' }}
          id='ticket-exchange'>
          <div className='w-full border-x-[1px] border-[#e5e7eb]' style={{ height: 'calc(7% - 0px)' }} />
          <div className='h-[55%] w-full border-x-[1px] border-b-4 border-[#e5e7eb] border-b-[#36100c] pb-0'>
            <div className='flex h-full w-full flex-col items-center justify-end border-b-0 border-b-[#bebebe]'>
              <div className='lined-h-bg mb-[40%] h-4 w-4 rounded-full border-[2px] border-[#d4d4d8] bg-repeat' />
              <div className='h-2 w-10 rounded-t-sm bg-zinc-800' />
            </div>
          </div>
          <div
            className='border-b-secondary w-full border-b-[2px] border-t-4 border-amber-400 bg-[#533c20]'
            style={{ height: 'calc(40% + 0px)' }}
          />
        </div>

        {/* right */}
        <div className='z-10 h-full w-1/4 origin-top-right translate-y-1 -skew-y-12 border-r-[2px] bg-gradient-to-b from-[#4a3939] to-[#e5deca]'>
          <div className='h-[5%] w-full'>
            <div className='h-full w-full border-r-4 border-r-[#34360c] blur-sm' />
          </div>
          <div className='h-[55%] w-full border-b-4 border-b-[#36100c]'>
            <div className='h-full w-full border-b-4 border-r-4 border-b-[#36100c] border-r-[#34360c] blur-sm' />
          </div>
          <div className='h-[40%] w-full border-t-4 border-amber-400 bg-[#705436]' />
        </div>
      </div>
    </div>
  );
}
