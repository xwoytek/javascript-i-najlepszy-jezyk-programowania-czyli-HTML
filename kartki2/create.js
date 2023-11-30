class head {
  constructor() {
    this.hed = this.header();
    this.div1 = this.divy();
    this.div2 = this.divy();
    this.div3 = this.divy();
  }
  header() {
    let h1 = document.createElement("header");
    document.body.appendChild(h1);
    return h1;
  }
  divy() {
    let ddiv3 = document.createElement("div");
    this.hed.appendChild(ddiv3);
    return ddiv3;
  }
}
class main {
  constructor() {
    this.divka = this.ddiv();
    this.sdiv1 = this.sdivg();
    this.sdiv2 = this.sdivb();
    this.sdiv3 = this.sdivg();
    this.sdiv4 = this.sdivb();
    this.sdiv5 = this.sdivg();
  }
  ddiv() {
    let duzdiv = document.createElement("div");
    document.body.appendChild(duzdiv);
    duzdiv.className = "ddiv";
    return duzdiv;
  }
  sdivb() {
    let smoldiv = document.createElement("div");
    this.divka.appendChild(smoldiv);
    smoldiv.className = "sdivblu";
    return smoldiv;
  }
  sdivg() {
    let smoldiv = document.createElement("div");
    this.divka.appendChild(smoldiv);
    smoldiv.className = "sdivgr";
    return smoldiv;
  }
}
class foot {
  constructor() {
    this.fot = this.footer();
    this.reddiv = this.rediv();
    this.yeldiv = this.yediv();
  }
  footer() {
    let f1 = document.createElement("footer");
    document.body.appendChild(f1);
    return f1;
  }
  rediv() {
    let divk = document.createElement("div");
    this.fot.appendChild(divk);
    divk.className = "rediv";
    return divk;
  }
  yediv() {
    let divk = document.createElement("div");
    this.fot.appendChild(divk);
    divk.className = "yediv";
    return divk;
  }
}
const newheader = new head();
const newmain = new main();
const newfoot = new foot();
