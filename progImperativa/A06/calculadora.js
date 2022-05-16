//AULA 06 - Criar uma calculadora JS

function soma(x,y){
    return x+y;
}

function subtracao (x,y){
    return x-y;
}

function multiplicacao(x,y){
    return x*y;
}

function divisao (x,y){
    return x/y;
}

function quadradoDoNumero(x){
    let valor = multiplicacao(x,x);
    return valor
}

function mediaDeTresNumeros(x,y,z){
    let valor = soma(x,y);
    valor = soma(valor,z);
    valor = divisao(valor,3);
    return valor
}

function calculaPorcentagem(x,y){
    let valor = (x/100) * y;
    return valor
}

console.log("-------------- Teste de Operações / Calculador --------------");

console.log(calculaPorcentagem(33,50));