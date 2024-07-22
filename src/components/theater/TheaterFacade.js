import React from 'react';
import TheaterEntrance from './TheaterEntrance.js';
import TheaterMarquee from './TheaterMarquee.js';

export default function TheaterFacade() {
  return (
    <div className='h-screen bg-[#ccc2bb]'>
      <TheaterMarquee />
      <TheaterEntrance />
    </div>
  );
}
