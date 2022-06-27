const esp = require ('./modulo/espectador');
const fil = require ('./modulo/filmes');

//INICIALIZANDO O VETOR ESPECTADORES
let espectadores = [];
// FUNCAO RAMDON - USADA PARA GERAR NUMEROS ALEATORIOS
function ramdon(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// FUNCAO PARA GERAR ESPECTADORES COM NOTA E IDADE ALEATORIAS NOTA[MIN 1 | MAX 3] 
// E IDADE DE [MIN 12 | MAX 50 ANOS]
function geradorEspectadores(qtd){
    for(let i = 0; i < qtd; i++){
        espectadores.push(new esp(ramdon(1,3),ramdon(12,50)))
    }
    return espectadores;
} 

// INVOCANDO A FUNCAO FIL = FILMES COM O PARAMETRO DE 15 ESPECTADORES
console.log(new fil(geradorEspectadores(15)));