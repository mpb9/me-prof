import { useState } from 'react';
import Toast from '../../common/Toast';
export default function MarqueeDesc(props) {
  let [copied, setCopied] = useState('');

  function handleCopy(e) {
    let text = e.target.innerText;
    if (text === 'EMAIL') {
      navigator.clipboard.writeText('michaelbeebe1031@gmail.com');
    } else if (text === 'PHONE') {
      navigator.clipboard.writeText('847-274-3448');
    } else {
      navigator.clipboard.writeText(text.toLowerCase());
    }

    setCopied(text);
    setTimeout(() => {
      setCopied('');
    }, 600);
  }

  return (
    <div className='marquee-desc-bg shadow-neon-top string-light-border h-[55%] w-full pt-1 rounded-br-2xl border-b-[1rem]'>
      <div className='flex flex-col justify-start w-full h-full marquee-desc-lined-bg overflow-hidden tracking-tighter text-[#4b4943] text-3xs sm:text-2xs md:text-xs lg:text-sm lg:leading-4'>
        {props.text.map((item, index) => {
          if (props.action[index] === 'copy') {
            return (
              <div key={item} className='flex w-full px-9 py-[4.5px] shadow-inner h-[26px] min-h-[26px]'>
                <button
                  className='w-full break-all cursor-copy hover:text-[#d02c2c] active:text-[#EC7A2F] overflow-clip text-nowrap'
                  onClick={handleCopy}>
                  {item}
                </button>
                {copied === item ? <Toast type='success' text='copied!' /> : null}
              </div>
            );
          }
          if (props.action[index] === 'tip') {
            return (
              <div key={item} className='flex w-full px-9 py-[4.5px] shadow-inner h-[26px] min-h-[26px]'>
                <button className='w-full cursor-default whitespace-break-spaces text-[#d02c2c] overflow-clip text-nowrap'>
                  {item}
                </button>
              </div>
            );
          }
          if (props.action[index] === 'none') {
            return (
              <div key={item} className='flex w-full px-9 py-[4.5px] shadow-inner h-[26px] min-h-[26px]'>
                <button className='w-full cursor-default whitespace-break-spaces overflow-clip text-nowrap'>
                  {item}
                </button>
              </div>
            );
          }
          if (props.action[index] === 'empty') {
            return (
              <div key={item} className='flex h-[26px] w-full px-9 py-[4.5px] shadow-inner min-h-[26px]'>
                <div className='w-full cursor-default whitespace-break-spaces overflow-clip text-nowrap'> </div>
              </div>
            );
          }
          return (
            <div key={item} className='flex h-[26px] w-full px-9 py-[4.5px] shadow-inner min-h-[26px]'>
              <a
                href={props.action[index]}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full whitespace-break-spaces hover:text-[#d02c2c] active:text-[#EC7A2F] overflow-clip text-nowrap'>
                {item}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
