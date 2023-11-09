function zad1() {
  let lista = [];
  for (let i = -1; i < 1001; i++) {
    lista.push(i);
  }
  return lista;
}
function zad2() {
  let lista = zad1();
  let lis2 = [];
  for (let i = 0; i < lista.length; i++) {
    let liczba = lista[i];
    let prime = null;
    if (liczba < 2) {
      prime = false;
    } else {
      prime = true;
    }
    for (let i = 2; i < liczba - 1; i++) {
      if (liczba % i == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      lis2.push(liczba);
    }
  }
  return lis2;
}
function zad3() {
  let lista = zad2();
  let licz = 0;
  for (let i = 0; i < lista.length; i++) {
    let liczba = lista[i];
    let prime = null;
    if (liczba < 2) {
      prime = false;
    } else {
      prime = true;
    }
    for (let i = 2; i < liczba - 1; i++) {
      if (liczba % i == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      licz++;
    }
  }
  return licz;
}
function zad4() {
  let l1 = 78;
  let l2 = 66;
  let i = Math.min(l1, l2);

  for (i; i > 0; i--) {
    if (l1 % i == 0 && l2 % i == 0) {
      return i;
    }
  }
}
function zad5() {
  let a = 78;
  let b = 66;
  let i = Math.min(a, b);
  let nwd = 0;
  for (i; i > 0; i--) {
    if (a % i == 0 && b % i == 0) {
      nwd = i;
      break;
    }
  }
  const nww = (a * b) / nwd;
  return nww;
}
function zad6() {
  let peln = 100;
  let a = 0;
  let b = 0;
  let c = 0;
  let rand1 = Math.random();
  let rand2 = Math.random();
  a = peln * rand1;
  b = peln - a;
  c = a * rand2;
  a -= c;

  return lista;
}
