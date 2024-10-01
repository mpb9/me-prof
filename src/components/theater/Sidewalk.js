import React from 'react';

export default function Sidewalk() {
  return (
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
              style={{ clipPath: 'polygon(6% 0, 94% 0, 97% 100%, 3% 100%)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
