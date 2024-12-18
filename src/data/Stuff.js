import * as Icon from '@phosphor-icons/react';
import { Stuff } from '../models/StuffModel';
import { CATEGORIES } from './Categories';

export const STUFF_LIST = [
  // MARK: Code
  Stuff.codeInstance('GitHub', 'https://github.com/mpb9', '', 'dev', Icon.GitBranch, true, true),
  Stuff.codeInstance(
    "My Personal Site's Codebase",
    'https://github.com/mpb9/me-prof',
    'github repository for my personal website',
    'both',
    Icon.Star,
    true,
    true
  ),
  Stuff.codeInstance(
    'Dump N Chase',
    'https://dump-n-chase.com/',
    'national hockey league statistical modeling project',
    'dev',
    Icon.Hockey,
    true,
    true
  ),
  Stuff.codeInstance(
    'Dump N Chase GitHub',
    'https://github.com/stars/mpb9/lists/dumpnchase',
    'list of nhl statistical modeling project code repositories - including backend and retired code',
    'dev',
    Icon.Hockey,
    true,
    true
  ),
  Stuff.codeInstance(
    'Graphics Playground',
    'https://graphics-playground.com/',
    '2d computer graphics project where users draw shapes/lines/curves, manipulate images, and more! (using a custom-built graphics library)',
    'dev',
    Icon.Shapes,
    true,
    true
  ),
  Stuff.codeInstance(
    'Graphics Playground GitHub',
    'https://github.com/stars/mpb9/lists/graphics',
    "all of my 2d graphics project's repositories",
    'dev',
    Icon.Shapes,
    true,
    true
  ),
  Stuff.codeInstance(
    'My Fantasy Football League',
    'https://order-41.com',
    'since the league im in is so weird, i built a site to accommodate its rules, etc',
    'dev',
    Icon.FootballHelmet,
    true,
    true
  ),
  Stuff.codeInstance(
    'PinPal GitHub',
    'https://github.com/stars/mpb9/lists/pinpal',
    "repositories for ongoing project using google maps api to create, save, and share maps of 'pins' (places)",
    'dev',
    Icon.MapPin,
    true,
    true
  ),
  Stuff.codeInstance(
    'youRL GitHub',
    'https://github.com/stars/mpb9/lists/yourl',
    'repositories for full-stack social media site i created to share links once a day with friends',
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
    'The Odin Project',
    'https://www.theodinproject.com/',
    'free full stack curriculum',
    'dev',
    Icon.FileCode,
    true
  ),
  Stuff.infoInstance(
    'Learn X in Y minutes',
    'https://learnxinyminutes.com/',
    'quick reference for programming languages',
    'dev',
    Icon.FileCode,
    true
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
    'CSS Tricks',
    'https://css-tricks.com/',
    'info on advanced or unique css techniques',
    'dev',
    Icon.FileCss,
    true
  ),
  Stuff.infoInstance(
    'HTML <head> Explained',
    'https://htmlhead.dev/',
    'comprehensive guide to the <head> element',
    'dev',
    Icon.FileHtml,
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
  Stuff.infoInstance(
    "Tania Rascia's Personal Site",
    'https://www.taniarascia.com/',
    'great resource for web development tutorials and ideas',
    'dev',
    Icon.FloppyDisk,
    true
  ),
  Stuff.infoInstance(
    'Full Stack Python',
    'https://www.fullstackpython.com/',
    'learn to build, deploy, and scale web applications with Python',
    'dev',
    Icon.FilePy,
    true
  ),
  Stuff.infoInstance(
    'Automate the Boring Stuff with Python',
    'https://automatetheboringstuff.com/',
    'python guide and project ideas (mostly for beginners)',
    'dev',
    Icon.FilePy,
    true
  ),
  Stuff.infoInstance(
    'Git Commands Cheat Sheet',
    'https://www.gitkraken.com/learn/git/commands',
    'quick reference for git commands',
    'dev',
    Icon.GitBranch,
    true
  ),

  // MARK: Movies
  Stuff.moviesInstance(
    'Letterboxd',
    'https://letterboxd.com/michaelbeebe/',
    'my movie diary, reviews, lists, etc',
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
    Icon.ListBullets,
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
    Icon.MegaphoneSimple,
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

  // MARK: Writings

  // MARK: Music
  Stuff.musicInstance(
    'Spotify',
    'https://open.spotify.com/user/8hor3sw0w4vz3cl2yopkegyum?si=4e313d075fd84cb5',
    '',
    'cool',
    Icon.Headphones,
    false,
    true
  ),
  Stuff.musicInstance(
    'Fall Rock Playlist',
    'https://open.spotify.com/playlist/4K8QQrhsItDwUO2akai7mD?si=2h1pOhrCSI6uNQc-YAbS4A',
    '',
    'cool',
    Icon.Ghost,
    false,
    true
  ),
  Stuff.musicInstance(
    'Classic Rock Playlist',
    'https://open.spotify.com/playlist/7nGSYp1yIzin030S1YrN1t?si=886a58973593442a',
    '',
    'cool',
    Icon.VinylRecord,
    false,
    true
  ),
  Stuff.musicInstance(
    '90s/00s Rock Playlist',
    'https://open.spotify.com/playlist/4pU9dQuMcyE1THFvzmthw8?si=d8e9f1417c584d55',
    '',
    'cool',
    Icon.CassetteTape,
    false,
    true
  ),
  Stuff.musicInstance(
    'Party/Fun Playlist',
    'https://open.spotify.com/playlist/2Le9cFQvG0cCFroDfV72jl?si=c986567fba1c460b',
    '',
    'cool',
    Icon.BeerStein,
    false,
    true
  ),
  Stuff.musicInstance(
    'Rap Playlist',
    'https://open.spotify.com/playlist/0jGrHUBUybXLZDgcGO6Yau?si=7d604b8971cb487b',
    '',
    'cool',
    Icon.MicrophoneStage,
    false,
    true
  ),

  // MARK: Maps
  Stuff.mapsInstance('Google Maps', 'https://maps.google.com', '', '', Icon.MapTrifold, true, false),
  Stuff.mapsInstance(
    'NYC',
    'https://www.google.com/maps/d/viewer?mid=1-wa0oQbqWeMILNOMbXYEsHrFHouwpQg&ll=40.73701000765635%2C-73.991733817946&z=13',
    'created to track my favorite food spots and places to check out in New York',
    'cool',
    Icon.City,
    true,
    true
  ),
  Stuff.mapsInstance(
    'ATL',
    'https://www.google.com/maps/d/viewer?hl=en&mid=1Etg-8q_m3HEcGYJuNnJB9EthINfd9cc&ll=33.918656446571994%2C-84.4114177&z=11',
    'things to do in Atlanta',
    'cool',
    Icon.CarProfile,
    false,
    true
  ),
  Stuff.mapsInstance(
    'Amsterdam',
    'https://www.google.com/maps/d/viewer?hl=en&mid=1zcNxbvUm5k3t9ESpUXBMPk1SoLtH6LM&ll=52.37102021418721%2C4.899101649999977&z=14',
    'where i wanted to / did visit in Amsterdam',
    'cool',
    Icon.Windmill,
    false,
    true
  ),
  Stuff.mapsInstance(
    'Asheville',
    'https://www.google.com/maps/d/viewer?hl=en&mid=1rD-47naM8GewRetH5wrZvWBhyjZ1dFc&ll=35.587787441791896%2C-82.56694757663533&z=14',
    '(mostly breweries)',
    'cool',
    Icon.Mountains,
    false,
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
  Stuff.toolsInstance(
    'New Tab Redirect',
    'https://chromewebstore.google.com/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna',
    'chrome extension i use to set my new tab page to a custom page',
    'cool',
    Icon.GoogleChromeLogo,
    false
  ),
  Stuff.toolsInstance('Clippy', 'https://bennettfeely.com/clippy/', 'css clip-path maker', 'dev', Icon.Polygon, true),
  Stuff.toolsInstance(
    'CSS-matic',
    'https://cssmatic.com/',
    'css generators for gradients, box shadows, border radius, and noise texture',
    'dev',
    Icon.FileCss,
    true
  ),
  Stuff.toolsInstance(
    'Nerd Fonts',
    'https://www.nerdfonts.com/',
    'patches developer targeted fonts with a high number of glyphs (icons)',
    'dev',
    Icon.TextAa,
    true
  ),
  Stuff.toolsInstance(
    'Color Designer - Gradient Generator',
    'https://colordesigner.io/gradient-generator',
    'gradient generator that lets you customize number of steps between colors',
    'dev',
    Icon.Gradient,
    true
  ),
  Stuff.toolsInstance(
    'free-for.dev',
    'https://github.com/ripienaar/free-for-dev?tab=readme-ov-file#table-of-contents',
    'list of free services for developers',
    'dev',
    Icon.ListBullets,
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
    false
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

  // MARK: Games
  Stuff.gamesInstance(
    'Connections',
    'https://www.nytimes.com/games/connections',
    '',
    '',
    Icon.PlugsConnected,
    true,
    false
  ),
  Stuff.gamesInstance(
    'Cine2Nerdle',
    'https://www.cinenerdle2.app/',
    'puzzle game(s) for movie lovers',
    'cool',
    Icon.PuzzlePiece,
    true,
    false
  ),

  // MARK: Social
  Stuff.socialInstance('Twitter', 'https://twitter.com/mbeeebe', '', 'cool', Icon.TwitterLogo),
  Stuff.socialInstance('Instagram', 'https://www.instagram.com/michael.beebe/', '', 'cool', Icon.Camera),
  Stuff.socialInstance('Reddit', 'https://www.reddit.com', '', '', Icon.RedditLogo),
  // MARK: Misc
];
