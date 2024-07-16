export class Style {
  constructor(el, fg, bg, style = "default") {
    this.el = el;
    this.fg = fg;
    this.bg = bg;
    this.style = style;
  }

  getTheme() {
    return this.theme;
  }

  setTheme(theme) {
    this.theme = theme;
  }

  getEl() {
    return this.el;
  }

  setEl(el) {
    this.el = el;
  }

  getFg() {
    return this.fg;
  }

  setFg(fg) {
    this.fg = fg;
  }

  getBg() {
    return this.bg;
  }

  setBg(bg) {
    this.bg = bg;
  }

  getStyle() {
    return this.style;
  }

  setStyle(style) {
    this.style = style;
  }
}
