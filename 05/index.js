const original = [1, 4, 12, 21, 53, 88, 112];

let pares = [];

for(let i of original){
    if(i % 2 === 0){
        pares.push(i)
    }
}
console.log(pares)