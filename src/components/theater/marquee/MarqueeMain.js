export default function MarqueeMain(props) {
  return (
    <div className='neon-green-light-bg text-accent-content shadow-dim-in flex h-[45%] w-full items-center justify-center border-t-2 border-[#f2f28b]'>
      <button className='font-bold cursor-default my-font-neon-glow text-shadow-neon-blue hover:text-shadow-neon-blue-intense h-fit hover:font-normal'>
        <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl'>{props.text}</span>
      </button>
    </div>
  );
}
