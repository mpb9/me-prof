import { STUFF_LIST } from '../../data/Stuff';
export default function SvgIcon({ site, style }) {
  const curr_site = STUFF_LIST.find((stuff) => stuff.name === site);

  return (
    <a
      href={curr_site.url}
      target='_blank'
      rel='noreferrer'
      className='inline-flex h-full cursor-pointer rounded-lg p-0 md:block'>
      <curr_site.icon weight='fill' className={`h-full w-6 md:w-7 lg:w-8 ${style.svg} hover:scale-110`} />
    </a>
  );
}
