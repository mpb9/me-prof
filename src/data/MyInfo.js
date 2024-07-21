import * as Icon from '@phosphor-icons/react';

export const MyInfo = {
  name: 'Michael Beebe',
  email: 'michaelbeebe1031@gmail.com',
  phone: '847-274-3448',
  location: 'Atlanta, GA',
  urls: {
    linkedin: 'https://www.linkedin.com/in/michaelbeebe9/',
    github: 'https://github.com/mpb9',
    letterboxd: 'https://letterboxd.com/michaelbeebe/',
    graphics_playground: 'https://graphics-playground.com/',
    dump_n_chase: 'https://dump-n-chase.com/',
  },
};

export const Links = [
  {
    site: 'GitHub',
    lowercased: 'github',
    url: MyInfo.urls.github,
    icon: Icon.GithubLogo,
  },
  {
    site: 'LinkedIn',
    lowercased: 'linkedin',
    url: MyInfo.urls.linkedin,
    icon: Icon.LinkedinLogo,
  },
  {
    site: 'Letterboxd',
    lowercased: 'letterboxd',
    url: MyInfo.urls.letterboxd,
    icon: Icon.FilmReel,
  },
  {
    site: 'Graphics Playground',
    lowercased: 'graphics_playground',
    url: MyInfo.urls.graphics_playground,
    icon: Icon.GraphicsCard,
  },
  {
    site: 'Dump N Chase',
    lowercased: 'dump_n_chase',
    url: MyInfo.urls.dump_n_chase,
    icon: Icon.Hockey,
  },
];
