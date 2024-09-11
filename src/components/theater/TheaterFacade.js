import React from 'react';
import Marquee from './Marquee.js';
import TheaterEntrance from './TheaterEntrance.js';

export default function TheaterFacade() {
  return (
    <div className='h-screen bg-[#eee3bd]'>
      <Marquee />
      <TheaterEntrance />
    </div>
  );
}
