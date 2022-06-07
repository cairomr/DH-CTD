//EXERCICIO 1
let peliculas = ['star wars','totoro','rocky','pulp fiction','la Vida es bella'];

function converterAMayusculas(peliculas){
    for (let x=0;x<peliculas.length;x++){
        peliculas[x] = peliculas[x].toUpperCase()
    }
    return peliculas;
}

//EXERCICIO 2
let arrayA = [];
let arrayB = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

function pasajeDeElementos(array1,array2) { 
    for(var x=0; x=array2.length;x++){
        array1.push(array2.pop().toUpperCase());
    } 
    return array1;
}

//EXERCICIO 4
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  let x =  0;
    while(x!=asia.length){
        comparacionesAsiaEuropa[x] = asia[x] === europa[x];
        x++
    }
    return comparacionesAsiaEuropa;
}
// VARIAVEIS REAPROVEITADAS NA FUNCAO MEDIA E SOMA
var lista = [4,5];
let total = 0;
let media = 0;
let maior = 0;

// FUNCAO QUE RECEBE O ARRAY E SOMA E PEDE A MEDIA
function pontuacaoMedia(array){
    let x = 0;
    let divisor = array.length;
    while (x <= array.length) {
        console.log(x);
        total = total + array.pop();
        x++;
    }
    return Media(total,divisor); 
}
// FUNACO QUE CALCULA A MEDIA
function Media(x,y){
        media = x / y;
        return 'A media do array: '+ media.toFixed(2);
}  
// FUNCAO CALCULA O MAIOR NUMERO EM UM ARRAY
function pontuacaoMaior(array){
    maior = array.shift();
    for(let x=0;x<=array.length;x++){
        if(maior < array[x]){
            maior = array[x];
        };
    }
    return 'O maior numero do array: '+ maior;
}

function calcMaiorNota(array1,array2,array3){
    for (let x = 1; x < 4 ; x++){
        nota[x] = pontuacaoMaior(array[x]);
    }
}

// CHAMADA PARA FUNCOES
console.log(pontuacaoMedia(lista));