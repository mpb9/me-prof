import { STUFF_LIST } from '../../data/Stuff';
export default function SvgIcon({ site, style }) {
  const curr_site = STUFF_LIST.find((stuff) => stuff.name === site);

  return (
    <a
      href={curr_site.url}
      target='_blank'
      rel='noreferrer'
      className='inline-flex p-0 rounded-lg cursor-pointer md:block'>
      <curr_site.icon weight='fill' className={`h-full w-8 md:w-10 ${style.svg} hover:scale-125`} />
    </a>
  );
}
