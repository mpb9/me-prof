export class Style {
  constructor(
    txt = 'text-stone-900',
    bg = 'bg-stone-300',
    brdr = 'border-slate-100',
    btn = 'bg-stone-800',
    svg = 'stroke-slate-100'
  ) {
    this.txt = txt;
    this.bg = bg;
    this.brdr = brdr;
    this.btn = btn;
    this.svg = svg;
    //this.rng = ' focus:ring-' + this.getColor(txt) + '-' + String(this.getShade(txt));

    // info: Inline CSS Classes (Tailwind)
    this.main_tw = this.inline();
    this.btn_tw = ' hover:bg-opacity-50' + this.btnInline();
    this.svg_tw = ' hover:opacity-70' + this.svgInline();
    //this.rng_tw = this.rngInline();

    // info: Hover CSS Classes (Tailwind)
    this.hvr_btn = this.btnHover();
    this.hvr_svg = this.svgHover();
  }

  // MARK: Inline CSS Formatters
  inline() {
    return this.formatInlineCss([this.txt, this.bg]);
  }

  btnInline() {
    return this.formatInlineCss([this.txt, this.brdr, this.btn]);
    // return this.formatInlineCss([this.txt, this.brdr, this.btn]) + ' focus:' + this.formatInlineCss([this.brdr], false);
  }

  aInline() {
    return this.formatInlineCss([this.bg]);
  }

  svgInline() {
    return this.formatInlineCss([this.svg]);
  }

  rngInline() {
    return this.formatInlineCss([this.rng]);
  }

  // MARK: Hover Class Formatters
  hvrColor(clr, bias = null) {
    if (!bias) {
      return clr <= 500 ? clr + 300 : clr - 300;
    }
    return bias === 'darker' ? Math.min(clr + 300, 950) : Math.max(clr - 300, 50);
  }

  btnHover() {
    const btn_tw_props = this.twProps(this.btn);
    const btn_hvr_clr = this.hvrColor(btn_tw_props.shade);
    let hover_btn = 'hover:' + btn_tw_props.prefix + '-' + btn_tw_props.color + '-' + btn_hvr_clr;

    const txt_tw_props = this.twProps(this.txt);
    const txt_hvr_clr = this.hvrColor(txt_tw_props.shade);
    let hover_txt = 'hover:' + txt_tw_props.prefix + '-' + txt_tw_props.color + '-' + txt_hvr_clr;

    const brdr_tw_props = this.twProps(this.brdr);
    const brdr_hvr_clr = this.hvrColor(brdr_tw_props.shade);
    let hover_brdr = 'hover:' + brdr_tw_props.prefix + '-' + brdr_tw_props.color + '-' + brdr_hvr_clr;

    return this.formatInlineCss([hover_btn, hover_txt, hover_brdr]);
  }

  svgHover() {
    const svg_tw_props = this.twProps(this.svg);
    const svg_hvr_clr = this.hvrColor(svg_tw_props.shade);
    let hover_svg = 'hover:' + svg_tw_props.prefix + '-' + svg_tw_props.color + '-' + svg_hvr_clr;

    const bg_tw_props = this.twProps(this.bg);
    const bg_hvr_clr = this.hvrColor(bg_tw_props.shade);
    let hover_bg = 'hover:' + bg_tw_props.prefix + '-' + bg_tw_props.color + '-' + bg_hvr_clr;

    return ' ' + hover_svg + ' ' + hover_bg;
  }

  // MARK: Utility Functions
  formatInlineCss(cssClassList, inc_space = true) {
    let inlineCss = '';
    cssClassList.forEach((cls) => {
      inlineCss += ' ' + cls;
    });

    if (inc_space) {
      return inlineCss;
    }

    return inlineCss.trimStart();
  }

  twProps(tw_style) {
    return {
      prefix: this.getPrefix(tw_style),
      color: this.getColor(tw_style),
      shade: this.getShade(tw_style),
    };
  }
  getPrefix(tw_style) {
    return String(tw_style.split('-')[0]);
  }
  getColor(tw_style) {
    return String(tw_style.split('-')[1]);
  }
  getShade(tw_style) {
    return parseInt(tw_style.split('-')[2]);
  }
}
