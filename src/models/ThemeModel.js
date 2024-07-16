export class Theme {
  constructor(name, main, nav, nav_btn) {
    this.name = name;
    this.main = main;
    this.nav = nav;
    this.nav_btn = nav_btn;
  }

  getName() {
    return this.name;
  }

  getMain() {
    return this.main;
  }

  getNav() {
    return this.nav;
  }

  getNavBtn() {
    return this.nav_btn;
  }
}
