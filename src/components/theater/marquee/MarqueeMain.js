import React from 'react';

export default function MarqueeMain(props) {
  return (
    <div className='neon-green-light-bg text-accent-content shadow-dim-in flex h-2/5 w-full items-center justify-center border-t-2 border-[#f2f28b]'>
      <button className='my-font-neon-glow text-shadow-neon-blue hover:text-shadow-neon-blue-intense h-fit cursor-default font-bold hover:font-normal'>
        <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>{props.text}</span>
      </button>
    </div>
  );
}
