class maindivki {
  constructor() {
    this.mainDiv = this.createMainDiv();
    this.lewodiv = this.rubduzelewo();
    this.prawodiv = this.rubduzeprawo();
    this.smoldiv = this.rubmaleprawo();
    this.pud1 = this.pode1();
    this.pud2 = this.pode2();
    this.pud4 = this.pode2();
    this.pud3 = this.pode1();
  }

  createMainDiv() {
    const mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    mainDiv.style.display = "flex";
    mainDiv.style.flexWrap = "wrap";
    mainDiv.style.backgroundColor = "black";
    mainDiv.style.border = "5px solid white";

    return mainDiv;
  }
  rubduzelewo() {
    const lewodiv = document.createElement("div");
    this.mainDiv.appendChild(lewodiv);
    lewodiv.style.display = "flex";
    lewodiv.style.flexWrap = "wrap";
    lewodiv.style.backgroundColor = "black";
    lewodiv.style.border = "3px solid white";
    return lewodiv;
  }
  rubduzeprawo() {
    const prawodiv = document.createElement("div");
    this.mainDiv.appendChild(prawodiv);
    prawodiv.style.display = "flex";
    prawodiv.style.flexWrap = "wrap";
    prawodiv.style.backgroundColor = "red";
    prawodiv.style.height = "min-content";
    prawodiv.style.border = "3px solid white";
    prawodiv.style.width = "240px";
    prawodiv.style.padding = "5px";
    return prawodiv;
  }
  rubmaleprawo() {
    const smoldiv = document.createElement("div");
    this.prawodiv.appendChild(smoldiv);
    smoldiv.style.display = "flex";
    smoldiv.style.flexWrap = "wrap";
    smoldiv.style.height = "auto";
    smoldiv.style.backgroundColor = "blue";
    smoldiv.style.border = "3px solid white";
    smoldiv.style.height = "min-content";
    smoldiv.style.padding = "5px";
    return smoldiv;
  }
  pode1() {
    const pud = document.createElement("div");
    this.smoldiv.appendChild(pud);
    pud.style.display = "flex";
    pud.style.flexWrap = "wrap";
    pud.style.backgroundColor = "green";
    pud.style.border = "1px solid white";
    pud.style.width = "100px";
    pud.style.height = "100px";
    pud.style.margin = "5px";
    return pud;
  }
  pode2() {
    const pud = document.createElement("div");
    this.smoldiv.appendChild(pud);
    pud.style.display = "flex";
    pud.style.flexWrap = "wrap";
    pud.style.backgroundColor = "yellow";
    pud.style.border = "1px solid white";
    pud.style.width = "100px";
    pud.style.height = "100px";
    pud.style.margin = "5px";
    return pud;
  }
  lewoanim() {
    let i = 1;

    setInterval(() => {
      const lewoanim = document.createElement("div");
      let r = Math.floor(Math.random() * (255 + 1));
      let g = Math.floor(Math.random() * (255 + 1));
      let b = Math.floor(Math.random() * (255 + 1));
      lewoanim.style.background =
        "#" + r.toString(16) + g.toString(16) + b.toString(16);
      lewoanim.style.width = "5px";
      lewoanim.style.border = "1px solid white";
      lewoanim.style.height = Math.pow(i, 2).toString() + "px";
      this.lewodiv.appendChild(lewoanim);

      i++;
    }, 1000);
  }
}

const newmaindivki = new maindivki();
newmaindivki.lewoanim();
