import { NavLink } from 'react-router-dom';
import BoxOffice from './box-office/BoxOffice.js';
import Sidewalk from './Sidewalk.js';
import TheaterDoor from './TheaterDoor.js';

export default function TheaterEntrance() {
  return (
    <>
      <div className='bg-base-100 bg-grid-2-s-1-[#A5B4FC44] brick-wall-border flex h-2/5 w-screen border-x-[2.75rem]'>
        <div
          className='from-base-200 to-base-100 border-base-200 flex h-full w-[26%] items-center justify-center space-x-7 border-l-[32px] bg-gradient-to-tr pb-2'
          style={{ clipPath: 'polygon(18% 0, 100% 10%, 100% 100%, 0 100%, 0 0)' }}>
          {/* GRAPHIC PLAYGROUND */}
          <div
            className='bg-graphics-poster mb-3 h-[58%] w-[35.15%] cursor-pointer bg-no-repeat hover:scale-110'
            style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0 100%)', backgroundSize: '100% 100%' }}>
            <a
              href='https://graphics-playground.com/'
              target='_blank'
              rel='noreferrer'
              className='inline-block h-full w-full'
              aria-label='Graphic Playground'
            />
          </div>
          {/* COOL STUFF */}
          <div
            className='bg-stuff-poster h-[55%] w-1/3 cursor-pointer bg-no-repeat hover:scale-110'
            style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0 100%)', backgroundSize: '100% 100%' }}>
            <NavLink to='/stuff' className='inline-block h-full w-full' aria-label='Cool Stuff' />
          </div>
        </div>

        {/* Entrance */}
        <div className='inline-flex h-full w-[48%] items-end'>
          <div className='bg-grid-2-s-1-[#A5B4FC44] flex h-[90%] w-full flex-col'>
            <div className='lined-bg h-[15%] w-full border-x-[0rem] border-b-[0.25rem] border-t-[0rem] border-slate-300' />
            <div className='flex h-[85%] w-full items-center justify-center border-x-[0rem] border-t-[0rem] border-[#251C0E]'>
              <TheaterDoor />
              <BoxOffice />
              <TheaterDoor />
            </div>
          </div>
        </div>

        <div
          className='from-base-200 to-base-100 border-base-200 flex h-full w-[26%] items-center justify-center space-x-7 border-r-[32px] bg-gradient-to-tl pb-2'
          style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 100%, 0 82%)' }}>
          {/* DEV STUFF */}
          <div
            className='bg-dev-poster h-[55%] w-1/3 cursor-pointer bg-no-repeat hover:scale-110'
            style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)', backgroundSize: '100% 100%' }}>
            <NavLink to='/dev' className='inline-block h-full w-full' aria-label='Dev Work' />
          </div>
          {/* DUMP+CHASE */}
          <div
            className='bg-dnc-poster mb-3 h-[58%] w-[35.15%] cursor-pointer bg-no-repeat hover:scale-110'
            style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)', backgroundSize: '100% 100%' }}>
            <a
              href='https://dump-n-chase.com/'
              target='_blank'
              rel='noreferrer'
              className='inline-block h-full w-full'
              aria-label='Dump+Chase'
            />
          </div>
        </div>
      </div>

      <Sidewalk />
    </>
  );
}
