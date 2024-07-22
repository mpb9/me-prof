import React from 'react';

export default function TheaterMarquee() {
  return (
    <>
      <div className='h-1/10 bg-gradient-to-t from-yellow-100 to-sky-950'>
        <div className='bg-secondary w-1/15 fixed z-20 h-1/4 border-b-2' style={{ left: '23%', top: '5%' }}></div>
        <div className='bg-secondary w-1/10 fixed h-2/5 rounded-t-full' style={{ left: '45%', top: '0%' }}></div>
        <div className='bg-secondary w-1/15 fixed z-20 h-1/4 border-b-2' style={{ right: '23%', top: '5%' }}></div>
      </div>

      <div className='bg-brick-wall relative z-10 flex h-2/5 w-screen columns-3 items-end space-x-0 bg-repeat-x px-0 text-center'>
        <div className='bg-base-300 border-accent h-2/3 w-1/4 origin-top-right -skew-y-2 border-b-4 border-r-8 border-dotted'>
          <div className='bg-secondary border-accent text-accent shadow-bright-top h-2/5 w-full border-4 border-r-0 border-dotted pt-1'>
            <span className='sm:text-xl md:text-2xl'>MICHAEL</span>
          </div>
          <div className='bg-primary h-3/5 w-full'>2</div>
        </div>

        <div
          className='border-accent static z-10 h-full w-1/2 border-b-4 border-dotted bg-transparent'
          style={{ borderRightWidth: '10px', borderLeftWidth: '10px' }}>
          <div className='bg-secondary h-1/3 w-1/3' style={{ marginLeft: '33.33%' }}></div>

          <div className='bg-base-100 h-2/3 w-full'>
            <div className='bg-secondary border-accent text-accent h-2/5 w-full border-y-4 border-dotted pt-1'>
              <span className='sm:text-xl md:text-2xl'> NOW SHOWING</span>
            </div>
            <div className='bg-primary border-accent h-3/5 w-full'>RESUME, ETC</div>
          </div>
        </div>

        <div className='bg-base-300 border-accent bg-clip-border-marquee-r h-2/3 w-1/4 origin-top-left skew-y-2 border-b-4 border-l-8 border-dotted'>
          <div className='bg-secondary text-accent border-accent shadow-bright-top h-2/5 w-full border-4 border-l-0 border-dotted pt-1'>
            <span className='sm:text-xl md:text-2xl'>BEEBE</span>
          </div>
          <div className='bg-primary h-3/5 w-full'>2</div>
        </div>
      </div>
    </>
  );
}
