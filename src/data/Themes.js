import { Style } from "../models/StyleModel";
import { Theme } from "../models/ThemeModel";

export const Light = new Theme(
  "light",
  new Style("default", "bg-green-600", "bg-gray-200", "light"),
  new Style("nav", "bg-gray-700", "#42200B", "light"),
  new Style("nav-btn", "bg-green-700", "bg-gray-700", "light"),
);

export const Dark = new Theme(
  "dark",
  new Style("default", "bg-red-100", "bg-orange-900", "dark"),
  new Style("nav", "bg-green-600", "#292524", "dark"),
  new Style("nav-btn", "bg-red-100", "bg-stone-900", "dark"),
);

export const Themes = { Light, Dark };
