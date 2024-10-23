import { Style } from '../models/StyleModel';
import { Theme } from '../models/ThemeModel';

export const Stuff = new Theme(
  new Style('text-[#EBE9E6]', 'bg-[#754F41]', 'border-[#BB7157]', 'bg-[#333C4A]', 'text-[#754F41]'),
  new Style('text-[#754F41]', 'bg-[#8B909E]', 'border-[#826526]', 'bg-[#EBE9E6]', 'text-[#B23F29]'),
  new Style('text-[#333C4A]', 'bg-[#EBE9E6]', 'border-[#754F41]', 'bg-[#BB7157]', 'text-[#B23F29]')
);
export const Dev = new Theme(
  new Style('text-[#c3b0e9]', 'bg-[#774103]', 'border-[#2197FF]', 'bg-[#000000]', 'text-[#FE8902]'),
  new Style('text-[#E497FE]', 'bg-[#BE6702]', 'border-[#2197FF]', 'bg-[#000000]', 'text-[#FE8902]'),
  new Style('text-[#2197FF]', 'bg-[#0A2641]', 'border-[#FE8902]', 'bg-[#000000]', 'text-[#FE8902]')
);
