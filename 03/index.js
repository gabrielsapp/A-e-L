const numeros = [54, 22, 14, 87, 284];

let achado = -1;


for(i of numeros){
    if(i === 10){
        achado = numeros.indexOf(i)
        

    }
}
console.log(achado)