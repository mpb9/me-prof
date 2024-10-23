import * as Icon from '@phosphor-icons/react';
import { Stuff } from '../models/StuffModel';
import { CATEGORIES } from './Categories';

export const STUFF_LIST = [
  // MARK: Code
  Stuff.codeInstance('GitHub', 'https://github.com/mpb9', '', 'dev', Icon.GitBranch, true, true),
  Stuff.codeInstance(
    "This Site's GitHub",
    'https://github.com/mpb9/me-prof',
    'repo for my personal website',
    'both',
    Icon.Star,
    true,
    true
  ),
  Stuff.codeInstance(
    'Dump N Chase',
    'https://dump-n-chase.com/',
    'NHL statistical modeling project',
    'dev',
    Icon.Hockey,
    true,
    true
  ),
  Stuff.codeInstance(
    'Dump N Chase GitHub',
    'https://github.com/stars/mpb9/lists/dumpnchase',
    'list of NHL statistical modeling project repos (including backend and retired code)',
    'dev',
    Icon.Hockey,
    true,
    true
  ),
  Stuff.codeInstance(
    'Graphics Playground',
    'https://graphics-playground.com/',
    '2d graphics project',
    'dev',
    Icon.PencilSimpleLine,
    true,
    true
  ),
  Stuff.codeInstance(
    'Graphics Playground GitHub',
    'https://github.com/stars/mpb9/lists/graphics',
    'list of 2d graphics project repos',
    'dev',
    Icon.PencilSimpleLine,
    true,
    true
  ),
  Stuff.codeInstance(
    'PinPal GitHub',
    'https://github.com/stars/mpb9/lists/pinpal',
    "ongoing map project's repos",
    'dev',
    Icon.MapPin,
    true,
    true
  ),
  Stuff.codeInstance(
    'youRL GitHub',
    'https://github.com/stars/mpb9/lists/yourl',
    'repos for full-stack social media site i created to share links once a day with friends',
    'dev',
    Icon.Link,
    false,
    true
  ),
  Stuff.codeInstance(
    'Basic Flask Python Project',
    'https://github.com/mpb9/python-flask-basic',
    'hello world python web app using flask micro web framework',
    'dev',
    Icon.FilePy,
    false,
    true
  ),

  // MARK: Info
  Stuff.infoInstance('Google Drive', 'https://drive.google.com', '', '', Icon.GoogleDriveLogo, true),
  Stuff.infoInstance(
    'GitHub Resources List',
    'https://github.com/stars/mpb9/lists/resources',
    "list i maintain of resources for web development (including other people's curated lists)",
    'both',
    Icon.ListBullets,
    false,
    false
  ),
  Stuff.infoInstance(
    'React Dossier',
    'https://docs.google.com/document/d/1es5I6-GlpkCMbwxNu6TmUst20lvxuTTDp_LKbbeD-HU/edit?usp=drive_link',
    '',
    'dev',
    Icon.FileJs,
    false,
    true
  ),
  Stuff.infoInstance(
    'Angular Dossier',
    'https://docs.google.com/document/d/17gnChX3t3BqgfDnfQhEHerp0qKw6UKpKXOfc5haHY_Q/edit?usp=drive_link',
    '',
    'dev',
    Icon.AngularLogo,
    false,
    true
  ),
  Stuff.infoInstance(
    'SQL Dossier',
    'https://docs.google.com/document/d/1ASyU0VJfE3NJA-Ci3tEmZDkGHJcdH1mmPllrnyiMXhw/edit?usp=drive_link',
    '',
    'dev',
    Icon.Database,
    false,
    true
  ),
  Stuff.infoInstance(
    'Python Dossier',
    'https://docs.google.com/document/d/1MEF8rQegUh775aSp8YdYkCaZkYXfcIiFjJuRM3ugpEE/edit?usp=drive_link',
    '',
    'dev',
    Icon.FilePy,
    false,
    true
  ),
  Stuff.infoInstance(
    'Markdown Syntax',
    'https://www.markdownguide.org/extended-syntax/',
    'comprehensive guide',
    'dev',
    Icon.MarkdownLogo,
    true
  ),

  // MARK: Tools
  Stuff.toolsInstance(
    'RayCast',
    'https://www.raycast.com/',
    'extremely useful productivity app for macOS that helps you find files, access applications, etc',
    'cool',
    Icon.Network
  ),
  Stuff.toolsInstance(
    'Phosphor Icons',
    'https://phosphoricons.com',
    'icon library i use',
    'dev',
    Icon.PhosphorLogo,
    true
  ),

  // MARK: Movies
  Stuff.moviesInstance(
    'Letterboxd',
    'https://letterboxd.com/michaelbeebe/',
    '',
    'cool',
    CATEGORIES.movies.icon,
    true,
    true
  ),
  Stuff.moviesInstance(
    'Letterboxd Lists',
    'https://letterboxd.com/michaelbeebe/list/list-list/detail',
    'directory for my letterboxd movie lists',
    'cool',
    CATEGORIES.movies.icon,
    true,
    true
  ),
  Stuff.moviesInstance(
    'Favorite Movies',
    'https://letterboxd.com/michaelbeebe/list/all-time-favs/',
    'list of my favorite (approx 40) movies *sorted by release date*',
    'cool',
    CATEGORIES.movies.icon,
    false,
    true
  ),
  Stuff.moviesInstance(
    'Favorite Directors',
    'https://letterboxd.com/michaelbeebe/list/directors-ranked/detail/',
    'list of my favorite directors *very much a work in progress*',
    'cool',
    CATEGORIES.movies.icon,
    false,
    true
  ),
  Stuff.moviesInstance(
    '[FILMGRAB]',
    'https://film-grab.com/',
    'movie stills database',
    'cool',
    Icon.Image,
    false,
    false
  ),
  Stuff.moviesInstance(
    'SHOT.CAFE',
    'https://shot.cafe/',
    'another movie stills database',
    'cool',
    Icon.Image,
    false,
    false
  ),
  Stuff.moviesInstance(
    'Just Watch',
    'https://www.justwatch.com/',
    'find where to stream movies & tv shows',
    'cool',
    Icon.MagnifyingGlass,
    false,
    false
  ),
  Stuff.moviesInstance(
    'Cine2Nerdle',
    'https://www.cinenerdle2.app/',
    'puzzle game(s) for movie lovers',
    'cool',
    Icon.PuzzlePiece,
    true,
    false
  ),
  // MARK: Maps
  Stuff.mapsInstance('Google Maps', 'https://maps.google.com', '', '', Icon.MapTrifold, true, false),
  Stuff.mapsInstance(
    'NYC Map',
    'https://www.google.com/maps/d/viewer?mid=1-wa0oQbqWeMILNOMbXYEsHrFHouwpQg&ll=40.73701000765635%2C-73.991733817946&z=13',
    'created to track my favorite food spots and places to check out in NYC',
    'cool',
    Icon.MapTrifold,
    true,
    true
  ),

  // MARK: Sports
  Stuff.sportsInstance('ESPN', 'https://www.espn.com', '', '', Icon.DribbbleLogo, true),
  Stuff.sportsInstance(
    'Sleeper Fantasy',
    'https://sleeper.com/leagues/1049462983430840320/team',
    'better platform than ESPN',
    '',
    Icon.FootballHelmet,
    true,
    true
  ),
  Stuff.sportsInstance(
    'ESPN Fantasy',
    'https://fantasy.espn.com/football/team?leagueId=15003269&teamId=8&seasonId=2024',
    '',
    '',
    Icon.FootballHelmet,
    true,
    true
  ),
  Stuff.sportsInstance(
    'Keep Trade Cut',
    'https://keeptradecut.com/dynasty/power-rankings/league-overview?leagueId=1049462983430840320&platform=2',
    'great site for fantasy football crowd-sourced rankings (specifically for my league)',
    'cool',
    Icon.FootballHelmet,
    true,
    true
  ),
  Stuff.sportsInstance(
    'Ringer Fantasy Football Rankings',
    'https://fantasyfootball.theringer.com/',
    'fantasy football rankings from The Ringer (good insight)',
    'cool',
    Icon.FootballHelmet,
    true,
    false
  ),

  // MARK: Career
  Stuff.careerInstance('LinkedIn', 'https://www.linkedin.com/in/michaelbeebe9', '', '', Icon.ShirtFolded, true, true),

  // MARK: Shop
  Stuff.shopInstance('Amazon', 'https://www.amazon.com', '', '', Icon.AmazonLogo, true, false),

  // MARK: Game
  Stuff.gameInstance(
    'Connections',
    'https://www.nytimes.com/games/connections',
    '',
    '',
    Icon.PlugsConnected,
    true,
    false
  ),

  // MARK: Social
  Stuff.socialInstance('Twitter', 'https://twitter.com/mbeeebe'),
  Stuff.socialInstance('Instagram', 'https://www.instagram.com/michael.beebe/', '', '', Icon.Camera),
  Stuff.socialInstance(
    'Spotify',
    'https://open.spotify.com/user/8hor3sw0w4vz3cl2yopkegyum?si=4e313d075fd84cb5',
    '',
    '',
    Icon.Headphones
  ),
  Stuff.socialInstance('Reddit', 'https://www.reddit.com', '', '', Icon.RedditLogo),
  // MARK: Misc
];
