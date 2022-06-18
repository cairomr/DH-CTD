/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

  -  a média das idades das pessoas que responderam ótimo;
  -  a quantidade de pessoas que responderam regular;
  -  a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
*/

const espectadores = [];

function Espectador (idade, opiniao) {
    this.idade = idade;
    this.opiniao = opiniao;
    espectadores.push(this);
}

new Espectador(18, 3);
new Espectador(25, 3);
new Espectador(23, 2);
new Espectador(42, 1);
new Espectador(56, 1);
new Espectador(65, 1);
new Espectador(33, 2);
new Espectador(27, 3);
new Espectador(38, 3);
new Espectador(47, 2);
new Espectador(50, 1);
new Espectador(18, 2);
new Espectador(21, 3);
new Espectador(17, 1);
new Espectador(16, 3);


//console.log(espectadores);

/* a média das idades das pessoas que responderam

let especOtimo = espectadores.filter(element => element.opiniao == 3);
console.log('qtd otimo: ' + especOtimo);
*/

let otimo = espectadores.filter(function(espectadores){
    return espectadores.opiniao > 2;
})
let soma = (a,b) => parseFloat(a+b);

let media = otimo.reduce(function (count, otimo){
    return count+otimo;
})


console.log(media);


