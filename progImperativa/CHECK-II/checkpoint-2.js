/*
// FATORIAL COM LOOP
function fatorial(x){
    let fatorial =1;
    for (let i = 1; i <=5; i++){
        fatorial *= i;
    }
    return fatorial;
}
*/
// FATORIAL SEM LOOP

const fator = n => {
    if (n > 1) {
        return n * fator(n - 1)
    }
    return n
}

console.log(fator(5));

