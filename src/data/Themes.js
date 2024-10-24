import { Style } from '../models/StyleModel';
import { Theme } from '../models/ThemeModel';

export const Stuff = new Theme(
  new Style('text-[#EBE9E6]', 'bg-[#754F41]', 'border-[#BB7157]', 'bg-[#333C4A]', 'text-[#754F41]'),
  new Style('text-[#754F41]', 'bg-[#82786B]', 'border-[#826526]', 'bg-[#EBE9E6]', 'text-[#a4cde2]'),
  new Style('text-[#333C4A]', 'bg-[#EBE9E6]', 'border-[#754F41]', 'bg-[#BB7157]', 'text-[#BF9001]')
);
export const Dev = new Theme(
  new Style('text-[#000000]', 'bg-[#774103]', 'border-[#2197FF]', 'bg-[#000000]', 'text-[#FE8902]'),
  new Style('text-[#E497FE]', 'bg-[#BE6702]', 'border-[#2197FF]', 'bg-[#000000]', 'text-[#ff9e2e]'),
  new Style('text-[#2197FF]', 'bg-[#0A2641]', 'border-[#FE8902]', 'bg-[#000000]', 'text-[#ff9e2e]')
);
