import { NavLink } from 'react-router-dom';

export default function MarqueeTop() {
  return (
    <>
      <div
        className='top-piece-bg w-1/10 h-1/10 border-x-6 fixed rounded-t-full border-t-4 border-[#3A2A00]'
        style={{ left: '45%', top: '0%' }}>
        <div className='flex h-full w-full pb-[0.8rem] pt-1 hover:h-[120%] hover:pb-0'>
          <div className='w-full h-full bg-center bg-no-repeat bg-contain bg-burger-boy hover:animate-bounce' />
        </div>
      </div>
      {/* ORDER 41 LINK */}
      <div className='absolute w-32 h-10 text-yellow-200 bg-black border-2 border-yellow-400 top-4 right-4 hover:bg-yellow-700'>
        <NavLink to='/order41' className='inline-block w-full h-full pt-[6px] text-center' aria-label='Order41'>
          ORDER41
        </NavLink>
      </div>
    </>
  );
}
