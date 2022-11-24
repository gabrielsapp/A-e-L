const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesComA = []
for(i of nomes){
    if(i[0] === "a" || i[0] === "A")
    nomesComA.push(i)
    }

console.log(nomesComA)