class stuuu {
  constructor() {
    this.czerdiw();
    this.smolczerw();
    this.biadiv();
    this.smolziel();
    this.smolnieb();
    this.sbiadiv();
    this.smolcz2();
    this.smolzol();
  }
  czerdiw() {
    const czer = document.querySelector(".redd");
    czer.style.border = "double #ed1c24 5px";
    czer.style.alignContent = "center";
    czer.style.display = "flex";
    czer.style.flexWarp = "warp";
    czer.style.width = "min-content";
  }
  smolczerw() {
    const sczer = document.querySelectorAll(".mred");
    const lista = Array.from(sczer);
    lista.forEach((el) => {
      el.style.margin = "5px";
      el.style.backgroundColor = "#ed1c24";
      el.style.width = "100px";
      el.style.height = "100px";
    });
  }

  biadiv() {
    const bial = document.querySelector(".whii");
    bial.style.border = "double #bbbbbb 5px";
    bial.style.alignContent = "center";
    bial.style.width = "min-content";
  }
  smolziel() {
    const sziel = document.querySelectorAll(".sgr");
    const lista = Array.from(sziel);
    lista.forEach((el) => {
      el.style.margin = "5px";
      el.style.backgroundColor = "#22b14c";
      el.style.width = "320px";
      el.style.height = "100px";
    });
  }
  smolnieb() {
    const snieb = document.querySelectorAll(".sbl");
    const lista = Array.from(snieb);
    lista.forEach((el) => {
      el.style.margin = "5px";
      el.style.backgroundColor = "#00a2e8";
      el.style.width = "320px";
      el.style.height = "100px";
    });
  }
  sbiadiv() {
    const sbial = document.querySelector(".swhii");
    sbial.style.border = "double #bbbbbb 5px";
    sbial.style.alignContent = "center";
    sbial.style.display = "flex";
    sbial.style.flexWarp = "warp";
    sbial.style.width = "min-content";
  }

  smolcz2() {
    const scz2 = document.querySelectorAll(".sred");
    const lista = Array.from(scz2);
    lista.forEach((el) => {
      el.style.margin = "3px";
      el.style.backgroundColor = "#ed1c24";
      el.style.width = "200px";
      el.style.height = "100px";
    });
  }
  smolzol() {
    const szol = document.querySelectorAll(".sye");
    const lista = Array.from(szol);
    lista.forEach((el) => {
      el.style.margin = "2px";
      el.style.backgroundColor = "#fff200";
      el.style.width = "120px";
      el.style.height = "100px";
    });
  }
}
const stuu = new stuuu();
