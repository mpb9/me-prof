import React from 'react';

export default function MarqueeMain(props) {
  return (
    <div className='neon-green-light-bg text-accent-content shadow-dim-in flex h-2/5 w-full items-center justify-center border-t-2 border-[#f2f28b]'>
      <button className='my-font-neon-glow text-shadow-neon-blue hover:text-shadow-neon-blue-intense h-fit font-bold hover:font-normal'>
        <span className='sm:text-3xl md:text-4xl lg:text-5xl'>{props.text}</span>
      </button>
    </div>
  );
}
