import React from 'react';
import TheaterEntrance from './TheaterEntrance.js';
import TheaterOverhang from './TheaterOverhang.js';

export default function TheaterFacade() {
  return (
    <div className='h-screen bg-[#ccc2bb]'>
      <TheaterOverhang />
      <TheaterEntrance />
    </div>
  );
}
