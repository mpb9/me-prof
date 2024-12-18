export default function Toast({ type, text }) {
  switch (type) {
    case 'error':
      return (
        <div className='fixed left-0 z-50 flex items-center justify-center w-full cursor-default'>
          <p className='text-[#d23f2f] bg-[#31321cf5] border-[1px] border-[#d23f2f] rounded-lg -mt-12 p-1 text-xs font-bold lg:text-sm lg:p-2'>
            {text}
          </p>
        </div>
      );
    case 'success':
      return (
        <div className='fixed left-0 z-50 flex items-center justify-center w-full cursor-default'>
          <p className='text-[#F2F28B] bg-[#483a20] border-[2px] border-[#F2F28B] rounded-2xl -mt-14 p-1 text-sm font-bold lg:text-base lg:px-2'>
            {text}
          </p>
        </div>
      );
    default:
      return (
        <div className='fixed left-0 z-50 flex items-center justify-center w-full cursor-default'>
          <p className='text-[#3A2A00] bg-[#fff] border-[1px] border-[#3A2A00] rounded-lg -mt-12 p-1 text-xs font-black lg:text-sm lg:p-2'>
            {text}
          </p>
        </div>
      );
  }
}
