import Marquee from './marquee/Marquee.js';
import TheaterEntrance from './TheaterEntrance.js';

export default function Theater() {
  return (
    <div className='h-screen bg-[#eee3bd]'>
      <Marquee />
      <TheaterEntrance />
    </div>
  );
}
