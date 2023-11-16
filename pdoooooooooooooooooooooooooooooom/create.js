class divki {
  constructor() {
    this.redd = this.reddivk();
    this.mred1 = this.smolred();
    this.mred2 = this.smolred();
    this.mred3 = this.smolred();
    this.whii = this.whitediv();
    this.sgr1 = this.smolgreen();
    this.sbl1 = this.smolblue();
    this.sgr2 = this.smolgreen();
    this.sbl2 = this.smolblue();
    this.sgr3 = this.smolgreen();
    this.swhii = this.swhitediv();
    this.sred = this.smolred2();
    this.sye = this.smolyellow();
  }
  reddivk() {
    const redd = document.createElement("div");
    document.body.appendChild(redd);
    redd.className = "redd";

    return redd;
  }
  smolred() {
    const mred = document.createElement("div");
    this.redd.appendChild(mred);
    mred.className = "mred";
    return mred;
  }

  whitediv() {
    const whii = document.createElement("div");
    document.body.appendChild(whii);
    whii.className = "whii";
    return whii;
  }
  smolblue() {
    const sbl = document.createElement("div");
    this.whii.appendChild(sbl);
    sbl.className = "sbl";
    return sbl;
  }
  smolgreen() {
    const sgr = document.createElement("div");
    this.whii.appendChild(sgr);
    sgr.className = "sgr";
    return sgr;
  }
  swhitediv() {
    const swhii = document.createElement("div");
    document.body.appendChild(swhii);
    swhii.className = "swhii";
    return swhii;
  }
  smolred2() {
    const sred = document.createElement("div");
    this.swhii.appendChild(sred);
    sred.className = "sred";
    return sred;
  }
  smolyellow() {
    const sye = document.createElement("div");
    this.swhii.appendChild(sye);
    sye.className = "sye";
    return sye;
  }
}
const divd = new divki();
