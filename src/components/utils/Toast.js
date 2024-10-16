export default function Toast({ type, text }) {
  switch (type) {
    case 'error':
      return (
        <div className='fixed left-0 cursor-default z-50 w-full flex items-center justify-center'>
          <p className='text-[#d23f2f] bg-[#31321cf5] border-[1px] border-[#d23f2f] rounded-lg -mt-12 p-1 text-xs font-bold lg:text-sm lg:p-2'>
            {text}
          </p>
        </div>
      );
    case 'success':
      return (
        <div className='fixed left-0 cursor-default z-50 w-full flex items-center justify-center'>
          <p className='text-[#63d22f] bg-[#322e1c] border-[2px] border-[#63d22f] rounded-lg -mt-12 p-1 text-xs font-bold lg:text-sm lg:p-2'>
            {text}
          </p>
        </div>
      );
    default:
      return (
        <div className='fixed left-0 cursor-default z-50 w-full flex items-center justify-center'>
          <p className='text-[#c1e6ef] bg-[#31321cf5] border-[1px] border-[#c1e6ef] rounded-lg -mt-12 p-1 text-xs font-bold lg:text-sm lg:p-2'>
            {text}
          </p>
        </div>
      );
  }
}
