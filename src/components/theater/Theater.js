import Marquee from './marquee/Marquee.js';
import TheaterEntrance from './TheaterEntrance.js';

export default function Theater() {
  return (
    <div className='h-screen bg-[#d1c49c]'>
      <Marquee />
      <TheaterEntrance />
    </div>
  );
}
