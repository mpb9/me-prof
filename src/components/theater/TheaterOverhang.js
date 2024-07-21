import React from 'react';
import TheaterLight from '../babies/TheaterLight.js';

export default function TheaterOverhang() {
  return (
    <div className='flex h-2/5 w-screen columns-3 items-end space-x-0 bg-gradient-to-t from-yellow-100 to-sky-950 bg-repeat-x text-center'>
      <div className='border-t-secondary bg-primary h-3/5 w-1/4 translate-x-1 translate-y-1 -rotate-1 border-t-4'>
        <div className='bg-secondary h-1/2 w-full'>1</div>
        <div className='bg-base-100 h-1/2 w-full'>2</div>
      </div>
      <div
        className='static z-10 h-full w-1/2 border-black'
        style={{ borderRightWidth: '0px', borderLeftWidth: '0px' }}>
        <div className='bg-base-100 h-1/10 w-1/5 rounded-t-full' style={{ marginLeft: '41.67%' }}></div>
        <div className='bg-primary h-3/10 w-full'></div>
        <div className='bg-base-100 h-3/5 w-full'></div>
      </div>
      <div className='bg-base-100 h-3/5 w-1/4 -translate-x-1 translate-y-1 rotate-1'>
        <div className='bg-secondary h-1/2 w-full'>1</div>
        <div className='bg-base-100 h-1/2 w-full'>2</div>
      </div>
    </div>
  );
}
