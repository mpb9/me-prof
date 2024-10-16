export default function MarqueeName() {
  return (
    <div
      className='shadow-neon-top fixed z-[21] h-[9.5%] w-[54%] cursor-default rounded-t-xl bg-[#3A2A00] pb-1 text-center text-2xl ring-2 ring-inset ring-[#f2f28b] md:text-4xl lg:text-4xl xl:text-6xl'
      style={{ top: '15%', left: '23%' }}>
      <div
        className='my-font-marquee-title text-shadow-neon-orange shadow-neon-yellow-bottom hover:text-shadow-neon-orange-bright inline-flex w-full items-center justify-center pb-1 text-[#ff800d]'
        style={{
          height: 'calc(100%)',
        }}>
        <i
          className='animate-[flicker] not-italic'
          style={{
            animationDuration: '0.75s',
            animationDelay: '10s',
          }}>
          Mich
        </i>
        <i
          className='animate-[flicker] not-italic'
          style={{
            animationDuration: '0.75s',
            animationDelay: '20s',
          }}>
          ael
        </i>
        &nbsp;
        <i
          className='animate-[flicker] not-italic'
          style={{
            animationDuration: '0.75s',
            animationDelay: '5s',
          }}>
          Bee
        </i>
        <i
          className='animate-[flicker-constant] not-italic'
          style={{
            animationDuration: '4s',
            animationDelay: '0s',
            animationIterationCount: '8',
          }}>
          be
        </i>
      </div>
    </div>
  );
}
