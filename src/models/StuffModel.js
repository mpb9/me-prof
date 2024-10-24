import { QuestionMark } from '@phosphor-icons/react';
import { CATEGORIES } from '../data/Categories';
export class Stuff {
  constructor(
    name = '',
    url = '',
    info = '',
    page = '',
    icon = QuestionMark,
    cat = CATEGORIES.misc,
    bookmark = false,
    mine = false
  ) {
    this.name = name;
    this.url = url;
    this.info = info;
    this.page = page;
    this.icon = this.createIcon(icon, cat);
    this.cat = cat;
    this.bookmark = bookmark;
    this.mine = mine;
  }

  createIcon(initialIcon = QuestionMark, initialCat = CATEGORIES.misc) {
    if (initialCat !== CATEGORIES.misc && initialIcon === QuestionMark) {
      return initialCat.icon;
    }
    return initialIcon;
  }

  static infoInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.info.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.info, bookmark, mine);
  }

  static codeInstance(name, url, info = '', page = 'dev', icon = CATEGORIES.code.icon, bookmark = false, mine = false) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.code, bookmark, mine);
  }

  static toolsInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.tools.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.tools, bookmark, mine);
  }
  static sportsInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.sports.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.sports, bookmark, mine);
  }

  static moviesInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.movies.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.movies, bookmark, mine);
  }

  static writingsInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.writings.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.writings, bookmark, mine);
  }

  static musicInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.music.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.music, bookmark, mine);
  }

  static mapsInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.maps.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.maps, bookmark, mine);
  }

  static careerInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.career.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.career, bookmark, mine);
  }

  static shopInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.shop.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.shop, bookmark, mine);
  }

  static gamesInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.games.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.games, bookmark, mine);
  }

  static socialInstance(name, url = '', info = '', page = '', icon = CATEGORIES.social.icon) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.social, true, true);
  }

  static miscInstance(
    name,
    url = '',
    info = '',
    page = '',
    icon = CATEGORIES.misc.icon,
    bookmark = false,
    mine = false
  ) {
    return new Stuff(name, url, info, page, icon, CATEGORIES.misc, bookmark, mine);
  }
}
