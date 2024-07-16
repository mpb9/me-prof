import { Style } from "../models/StyleModel";
import { Theme } from "../models/ThemeModel";

export const Light = new Theme(
  "light",
  new Style("default", "text-rose-950", "bg-zinc-300", "light"),
  new Style("nav", "text-pink-50", "bg-amber-950", "light"),
  new Style("nav-btn", "text-stone-700", "bg-red-200", "light"),
);

export const Dark = new Theme(
  "dark",
  new Style("default", "text-emerald-50", "bg-zinc-500", "dark"),
  new Style("nav", "text-green-500", "bg-stone-900", "dark"),
  new Style("nav-btn", "text-emerald-800", "bg-green-100", "dark"),
);

export const GreyScale = new Theme(
  "greyscale",
  new Style("default", "text-black", "bg-stone-300", "greyscale"),
  new Style("nav", "text-white", "bg-zinc-800", "greyscale"),
  new Style("nav-btn", "text-black", "bg-gray-200", "greyscale"),
);

export const Themes = { Light, Dark };
