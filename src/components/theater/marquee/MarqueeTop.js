export default function MarqueeTop() {
  return (
    <div
      className='top-piece-bg w-1/10 h-1/10 border-x-6 fixed rounded-t-full border-t-4 border-[#3A2A00]'
      style={{ left: '45%', top: '0%' }}>
      <div className='flex h-full w-full pb-[0.8rem] pt-1 hover:h-[120%] hover:pb-0'>
        <div className='w-full h-full bg-center bg-no-repeat bg-contain bg-burger-boy hover:animate-bounce' />
      </div>
    </div>
  );
}
