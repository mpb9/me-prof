import React from 'react';

export default function MarqueeDesc(props) {
  return (
    <div className='bg-primary shadow-neon-top string-light-border text-2xs flex h-3/5 w-full flex-col justify-start overflow-scroll rounded-br-2xl border-b-[1rem] px-6 py-1 sm:text-xs md:text-sm lg:text-base xl:text-base xl:leading-5 2xl:text-lg'>
      {props.text.map((item, index) => {
        if (props.action[index] === 'copy') {
          return (
            <div key={item} className='flex w-full border-y-[1px] border-[#00000033] px-4 py-[0.33rem] shadow-inner'>
              <button
                className='w-full cursor-copy break-all text-stone-700 hover:text-red-600 active:text-green-700'
                onClick={() => navigator.clipboard.writeText(item.toLowerCase().replace(/\s/g, ''))}>
                {item}
              </button>
            </div>
          );
        }
        if (props.action[index] === 'none') {
          return (
            <div
              key={item}
              className='flex h-fit w-full border-y-[1px] border-[#00000033] px-4 py-[0.33rem] shadow-inner'>
              <button className='w-full cursor-default whitespace-break-spaces text-stone-700'>{item}</button>
            </div>
          );
        }
        return (
          <div
            key={item}
            className='flex h-fit w-full border-y-[1px] border-[#00000033] px-4 py-[0.33rem] shadow-inner'>
            <a
              href={props.action[index]}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full whitespace-break-spaces text-stone-700 hover:text-red-600'>
              {item}
            </a>
          </div>
        );
      })}
    </div>
  );
}
