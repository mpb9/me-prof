export class Theme {
  constructor(main, nav, footer) {
    this.main = main;
    this.nav = nav;
    this.footer = footer;
  }

  setMain(main) {
    this.main = main;
  }

  setNav(nav) {
    this.nav = nav;
  }

  setFooter(footer) {
    this.footer = footer;
  }
}
