import Michael_Beebe_Resume from '../../../static/docs/Michael_Beebe_Resume.pdf';
import MarqueeDesc from './MarqueeDesc';
import MarqueeMain from './MarqueeMain';
import MarqueeName from './MarqueeName';
import MarqueeTop from './MarqueeTop';

export default function Marquee() {
  return (
    <>
      {/* Sky  */}
      <div className='h-1/10 bg-gradient-to-t from-yellow-100 to-[#2c6277]'>
        <MarqueeTop />
        <MarqueeName />

        {/* Spot Lights */}
        <div
          className='bg-dot-1-s-1-amber-400 hover:bg-dot-1-s-2-amber-300 w-1/8 border-6 fixed z-20 h-[14.5%] border-r-8 border-[#3A2A00] bg-[#3A2A00]'
          style={{ top: '10%', left: '28.5%' }}
        />
        <div
          className='bg-dot-1-s-1-amber-400 hover:bg-dot-1-s-2-amber-300 border-t-6 fixed z-20 h-[14.5%] w-[16%] border-8 border-[#3A2A00] bg-[#3A2A00]'
          style={{ top: '8.5%', left: '42%' }}
        />
        <div
          className='bg-dot-1-s-1-amber-400 w-1/8 border-6 hover:bg-dot-1-s-2-amber-300 fixed z-20 h-[14.5%] border-l-8 border-[#3A2A00] bg-[#3A2A00]'
          style={{ top: '10%', left: '59%' }}
        />

        {/* Pillars */}
        <div
          className='marquee-pillar-bg fixed z-[22] h-[34%] w-[2.5em] rounded-b-xl rounded-tl-3xl rounded-tr-xl'
          style={{ top: '19%', left: '0%' }}
        />
        <div
          className='marquee-pillar-bg fixed z-[22] h-[38%] w-[3.5em] rounded-b-xl rounded-tl-3xl rounded-tr-xl'
          style={{ top: '14%', left: '23%' }}
        />
        <div
          className='marquee-pillar-bg shadow-dim fixed z-[22] h-[38%] w-[3.5em] rounded-b-xl rounded-tl-xl rounded-tr-3xl'
          style={{ top: '14%', right: '23%' }}
        />
        <div
          className='marquee-pillar-bg shadow-dim fixed z-[22] h-[34%] w-[2.5em] rounded-b-xl rounded-tl-xl rounded-tr-3xl'
          style={{ top: '19%', right: '0%' }}
        />
      </div>

      <div className='bg-brick-wall relative z-10 flex h-2/5 w-screen columns-3 items-end space-x-0 border-t-8 border-[#eee3bd] border-opacity-40 bg-repeat px-4 text-center'>
        <div className='bg-base-300 shadow-neon-top h-2/3 w-1/4 origin-top-right -skew-y-2'>
          <MarqueeMain text={'ABOUT'} />
          <MarqueeDesc
            text={['LINKEDIN', 'GITHUB', 'RESUME (PDF)']}
            action={['https://www.linkedin.com/in/michaelbeebe9/', 'https://github.com/mpb9', Michael_Beebe_Resume]}
          />
        </div>

        <div className='static z-10 h-2/3 w-1/2'>
          <div className='h-full w-full'>
            <MarqueeMain text={'NOW SHOWING'} />
            <MarqueeDesc
              text={[
                'FULL-STACK SOFTWARE ENGINEER',
                'FORMERLY @ GENERAL MOTORS',
                'UNC CHAPEL HILL: B.S. COMP SCI, B.A. ECON',
              ]}
              action={['none', 'none', 'none']}
            />
          </div>
        </div>

        <div className='bg-clip-border-marquee-r shadow-neon-top h-2/3 w-1/4 origin-top-left skew-y-2'>
          <MarqueeMain text={'CONTACT'} />
          <MarqueeDesc text={['MICHAELBEEBE1031@GMAIL.COM', '847-274-3448']} action={['copy', 'copy']} />
        </div>
      </div>
    </>
  );
}
