const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for(i of arrayA){
    for(e of arrayB){
        if(i > e){
            console.log(i)
        }else if(e > i){
            console.log(e)
        }

    }
}