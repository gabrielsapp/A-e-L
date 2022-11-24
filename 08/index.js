const numeros = [3, 24, 1, 8, 11, 7, 15];

let Maibrabo = numeros[0]


for(i of numeros){
    if(i > Maibrabo){
        Maibrabo = i;
    }
}
console.log(Maibrabo)
