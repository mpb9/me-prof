import { Style } from '../models/StyleModel';
import { Theme } from '../models/ThemeModel';

export const Stuff = new Theme(
  new Style('text-[#EBE9E6]', 'bg-[#3b2f24d0]', 'border-[#BB7157]', 'bg-[#333C4A]', 'text-[#754F41]'),
  new Style('text-[#754F41]', 'bg-[#82786B]', 'border-[#826526]', 'bg-[#EBE9E6]', 'text-[#9cdeff]'),
  new Style('text-[#333C4A]', 'bg-[#EBE9E6]', 'border-[#754F41]', 'bg-[#BB7157]', 'text-[#bb8957]')
);
export const Dev = new Theme(
  new Style('text-[#000000]', 'bg-[#000000]', 'border-[#2197FF]', 'bg-[#000000]', 'text-[#FE8902]'),
  new Style('text-[#FE8902]', 'bg-[#E497FE]', 'border-[#FE8902]', 'bg-[#000000]', 'text-[#000000]'),
  new Style('text-[#000]', 'bg-[#FE8902]', 'border-[#000000]', 'bg-[#000000]', 'text-[#2197FF]')
);
