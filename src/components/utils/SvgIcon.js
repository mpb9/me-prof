import { Links } from '../../data/MyInfo';

export default function SvgIcon({ site, style }) {
  const link = Links.find((link) => link.site === site);
  const tw_class = 'h-full w-10' + style.svg_tw + style.hvr_svg;

  return (
    <a
      href={link.url}
      target='_blank'
      rel='noreferrer'
      className='ml-0 mr-3 inline-flex h-full cursor-pointer justify-center rounded-lg p-0 md:block'>
      <link.icon weight='duotone' className={tw_class} />
    </a>
  );
}
