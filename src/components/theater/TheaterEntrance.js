import React from 'react';

export default function TheaterEntrance() {
  return (
    <>
      <div className='bg-base-100 bg-grid-2-s-1-[#A5B4FC44] brick-wall-border flex h-2/5 w-screen border-x-[2.75rem]'>
        {/* Left Wall */}
        <div
          className='from-base-200 to-base-100 border-base-200 flex h-full w-[26%] items-center justify-center space-x-7 border-l-[32px] bg-gradient-to-tr'
          style={{ clipPath: 'polygon(18% 0, 100% 10%, 100% 100%, 0 100%, 0 0)' }}>
          {/* poster(s) */}
          <div
            className='mb-3 h-[58%] w-[35.15%] bg-red-600'
            style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0 100%)' }}></div>
          <div
            className='h-[55%] w-1/3 bg-red-600'
            style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0 100%)' }}></div>
        </div>

        {/* Entrance */}
        <div className='inline-flex h-full w-[48%] items-end'>
          <div className='bg-base-100 w-full' style={{ height: '90%' }}></div>
        </div>

        {/* Right Wall */}
        <div
          className='from-base-200 to-base-100 border-base-200 flex h-full w-[26%] items-center justify-center space-x-7 border-r-[32px] bg-gradient-to-tl'
          style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%, 0 82%)' }}>
          {/* poster(s) */}
          <div
            className='h-[55%] w-1/3 bg-red-600'
            style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)' }}></div>
          <div
            className='mb-3 h-[58%] w-[35.15%] bg-red-600'
            style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>
      </div>

      {/* Sidewalk */}
      <div className='h-1/10 bg-gradient-to-b from-[#7d714c] to-[#8b8369]'>
        <div className='h-full w-full' style={{ clipPath: 'polygon(6% 0, 94% 0, 97% 100%, 3% 100%)' }}>
          <div
            className='border-secondary mx-[25%] h-full w-1/2 border-t-[12px]'
            style={{ clipPath: 'polygon(6% 0, 94% 0, 97% 100%, 3% 100%)' }}>
            {/* carpet */}
            <div
              className='bg-secondary h-4/5 w-full border-b-2 border-[#242e22]'
              style={{ clipPath: 'polygon(0 0%, 100% 0%, 96% 100%, 4% 100%)' }}>
              <div
                className='mx-[25%] h-2/3 w-1/2 bg-[#9bb47e]'
                style={{ clipPath: 'polygon(6% 0, 94% 0, 97% 100%, 3% 100%)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
