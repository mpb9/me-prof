import { Style } from '../models/StyleModel';
import { Theme } from '../models/ThemeModel';

export const Light = new Theme(
  new Style('text-teal-900', 'bg-stone-300', 'border-rose-900', 'bg-orange-300', 'stroke-rose-900'),
  new Style('text-pink-100', 'bg-purple-400', 'border-pink-100', 'bg-zinc-400', 'stroke-amber-800'),
  new Style('text-stone-700', 'bg-red-200', 'border-red-200', 'bg-red-200', 'stroke-red-200')
);

export const Dark = new Theme(
  new Style('text-emerald-100', 'bg-zinc-600', 'border-emerald-50', 'bg-emerald-50', 'stroke-emerald-100'),
  new Style('text-emerald-200', 'bg-stone-900', 'border-emerald-500', 'bg-zinc-900', 'stroke-green-500'),
  new Style('text-emerald-800', 'bg-green-100', 'border-emerald-800', 'bg-emerald-800', 'stroke-emerald-800')
);

export const BW = new Theme(
  new Style('text-black', 'bg-stone-300', 'border-black', 'bg-black', 'stroke-black'),
  new Style('text-white', 'bg-zinc-800', 'border-white', 'bg-zinc-600', 'stroke-white'),
  new Style('text-black', 'bg-gray-200', 'border-black', 'bg-black', 'stroke-black')
);

export const MyFav = new Theme(
  new Style('text-emerald-50', 'bg-stone-700', 'border-emerald-50', 'bg-emerald-50', 'stroke-emerald-100'),
  new Style('text-green-500', 'transparent', 'border-green-500', 'bg-stone-700', 'stroke-green-500'),
  new Style('text-emerald-800', 'bg-green-100', 'border-emerald-800', 'bg-emerald-800', 'stroke-emerald-800')
);

export const Stuff = new Theme(
  new Style('text-[#EBE9E6]', 'bg-[#4C595A]', 'border-[#826526]', 'bg-[#B23F29]', 'stroke-[#754F41]'),
  new Style('text-[#EBE9E6]', 'bg-[#826526]', 'border-[#826526]', 'bg-[#333C4A]', 'stroke-[#754F41]'),
  new Style('text-[#EBE9E6]', 'bg-[#4C595A]', 'border-[#826526]', 'bg-[#B23F29]', 'stroke-[#754F41]')
);

export const NewTab = new Theme(
  new Style('text-red-400', 'bg-gray-800', 'border-red-400', 'bg-red-400', 'stroke-red-400'),
  new Style('text-red-200', 'bg-gray-700', 'border-red-200', 'bg-red-200', 'stroke-red-200'),
  new Style('text-red-600', 'bg-gray-900', 'border-red-600', 'bg-red-600', 'stroke-red-600')
);

export const Dev = new Theme(
  new Style('text-yellow-400', 'bg-gray-800', 'border-yellow-400', 'bg-yellow-400', 'stroke-yellow-400'),
  new Style('text-yellow-200', 'bg-gray-700', 'border-yellow-200', 'bg-yellow-200', 'stroke-yellow-200'),
  new Style('text-yellow-600', 'bg-gray-900', 'border-yellow-600', 'bg-yellow-600', 'stroke-yellow-600')
);
