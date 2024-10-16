export default function BoxOfficeTop() {
  return (
    <>
      {/* upper brim  */}
      <div className='flex h-[0.4rem] w-full'>
        <div className='diag-45-bg z-20 w-[30%]' style={{ height: 'calc(100% + 0.25rem)' }} />
        <div className='z-30 flex w-[40%] flex-col' style={{ height: 'calc(100% + 0.25rem)' }}>
          <div className='-ml-[12%] h-[0.29rem] w-[124%] bg-[#D5D0A5]' />
          <div className='-ml-[12%] w-[124%] bg-[#e0e0db]' style={{ height: 'calc(100% - 0.25rem)' }} />
        </div>
        <div className='diag-315-bg z-20 w-[30%]' style={{ height: 'calc(100% + 0.25rem )' }} />
      </div>

      {/* middle */}
      <div className='mt-[0.25rem] flex h-[2rem] w-full'>
        <div className='w-[25.5%] bg-[#cac8c0]' style={{ height: 'calc(100% )' }} />
        <div className='my-font-bebas flex h-full w-[50%] items-start justify-center bg-[#dfdfd5] text-xs text-[#3c3930] sm:text-sm md:text-lg lg:text-xl cursor-default'>
          TICKETS
        </div>
        <div className='z-20 w-[25.5%] bg-[#e5e5da]' style={{ height: 'calc(100%)' }} />
      </div>

      {/* lower brim */}
      <div className='flex h-[0.2rem] w-full justify-between'>
        <div
          className='triangle-tl-bg z-20 rounded-bl-sm border-l-[0.75rem] border-[#cac8c0]'
          style={{ height: 'calc(100% + 0.25rem)', width: 'calc(25% + 0.5rem)' }}
        />
        <div
          className='z-30 flex flex-col border-x-[1px] border-t-2 border-t-[#c2bf9b]'
          style={{
            height: 'calc(100% + 0.25rem)',
            width: 'calc(50%)',
          }}
        />
        <div
          className='triangle-tr-bg z-20 rounded-br-sm border-r-[0.75rem] border-[#E5E5DA]'
          style={{ height: 'calc(100% + 0.25rem )', width: 'calc(25% + 0.5rem)' }}
        />
      </div>
    </>
  );
}
