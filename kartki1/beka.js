function zad1(){
    // 1.Napisz program generujący tabliczkę mnożenia od 1 do 10. Z UŻYCIEM WHILE
    let i = 0
    let w = 1
    while(i<10){
        let k = 1
        let str = ""

        while(k<=10){
            let xd = k*w
            str+=(String(xd))
            str+="  "
        
            k++
        
        }
    console.log(str)
    i++
    w++
    }
}
function zad1b(){
    // 1.Napisz program generujący tabliczkę mnożenia od 1 do 10. Z UŻYICEM FOR
    let w =1
    for(let i = 1; i<11; i++){
        let str = ""
        for(let k = 1; k<11; k++){
            let xd = k*w
            str+=(String(xd))
            str+="  "
        }
        console.log(str)
        w++
    }
}
function zad2(){
    // 2.Zmodyfikuj wcześniejszy program i wygeneruj listę kochamProgrmowac zawierającą wszystkie liczby z poprzedniego zadania i spierwiastój wszystkie wartości znajdujące się pod indeksami podzielnymi przez 7. 
    let w =1
    let lista = []
    for(let i = 1; i<11; i++){
        for(let k = 1; k<11; k++){
            let xd = k*w
            lista.push(xd)

        }
        w++
    }
    for(let u = 0; u<lista.length;u++){
        if(u % 7 == 0){
            lista[u] = Math.sqrt(lista[u])
        }
    }
    console.log(lista)
}
function zad3(){
    // 3.Sprawdź których liczb jest więcej parzystych czy nieparzystych (kochamProgrmowac )

    let w =1
    let lista = []
    for(let i = 1; i<11; i++){
        for(let k = 1; k<11; k++){
            let xd = k*w
            lista.push(xd)

        }
        w++
    }
    for(let u = 0; u<lista.length;u++){
        if(u % 7 == 0){
            lista[u] = Math.sqrt(lista[u])
        }
    }
    let t = 0
    let n = 0
    for(let b = 0; b<lista.length;b++){
        if(lista[b] % 2 == 0){
            t++
        }
        else{
            n++
        }
    }
    console.log(t,"<-tyle parzystych  a tyle nieparzystych ->",n)
}
function zad4(){
    // 4.Podziel 97 przez wszystkie liczby z otrzymanej listy kochamProgrmowac. Jeśli rozwinięcie dziesiętne znajduje się w przedziale od 0.1 > i   <0.4. Umieść liczby w newList. Pozbądź się z listy powtarzających się liczb i wyświetl tą listę 
    let w =1
    let lista = []
    for(let i = 1; i<11; i++){
        for(let k = 1; k<11; k++){
            let xd = k*w
            lista.push(xd)

        }
        w++
    }
    for(let u = 0; u<lista.length;u++){
        if(u % 7 == 0){
            lista[u] = Math.sqrt(lista[u])
        }
    }


    let newlist = []

    for (let z = 0; z < lista.length; z++) {
        let kochamypanaadrianaponiatowskiegonaszegowspanialegonauczycielakochamygojakocalaklasa2azroku2023 = lista[z] / 97
        let q = kochamypanaadrianaponiatowskiegonaszegowspanialegonauczycielakochamygojakocalaklasa2azroku2023 - Math.floor(kochamypanaadrianaponiatowskiegonaszegowspanialegonauczycielakochamygojakocalaklasa2azroku2023)

        if (q > 0.1 && q < 0.4) {
            newlist.push(lista[z])

        }
    }

    console.log(newlist);

}
function zad5(){
    // 5.Wygeneruj macierz jednostkową. 
    let wers_ow = []
    let liczbawierszy = 5
    liczbawierszy--
    for(let i = 0;i<=liczbawierszy;i++){
        
        wers_ow.push(0)
    }
    for(let l = 0;l<=liczbawierszy;l++){
        wers_ow[l] = 1
        console.log(wers_ow)
        wers_ow[l] = 0
    }
}
function zad6(){
    // 6.Napisz skrypt, który utworzy listę liczb pierwszych z zakresu od 1 do 200. Wyświetl ją. 
    let lista = []
    for(let test = 0;test<=200;test++){
        let prime = true
        if(test<2){
            prime = false
        }
        for(let k = 2; k<test-1;k++){
            if (test%k == 0){
                prime =false
                break
            }
        }
        if(prime){
            lista.push(test)
        }

    }
    console.log(lista)
}

zad5()

