//variaveis
let alunos_array = [];
// Alimentacao de dados
alunos_array.push( 
    alunos('Carlos','M',1,[7,7,7],'7B'),
    alunos('Ramon','M',2,[9,8,8],'7B'),
    alunos('Breno','M',3,[7,9,9],'7B'),
    alunos('Carla','F',4,[8,7,7],'7B'),
    alunos('Monique','F',5,[5,10,7],'7B'),
    alunos('Bianca','F',6,[3,2,7],'7B'),
    alunos('Andreia','F',7,[10,10,9],'7B')
    );
// funcao construtora
function alunos(nome,sexo,id,notas,turma){
    return { 
        nome:nome,
        sexo:sexo,
        id:id,
        notas:notas,
        turma:turma,
        media:media(notas)
    };
}
// Funcao de tirar a media das notas
function media(array){
    return (array.reduce((soma,notas)=>soma+=notas, 0) / array.length);
}
//Funcao para verificar o sexo
function mediaPorSexo(array,sexoEscolhido){
    return array.filter(
        function(array){
            return (array.sexo === sexoEscolhido);
        }
    )
}

/* Funcao de tirar a media das notas
 function media2(array){
    let soma = 0;
    let total = 0;
    for (let n of array){
            soma += n;
    }
    total = soma/array.length;
    return total;
 }
*/
//Funcao que separa a media dos alunos e cria uma array de retorno
function separarMedia(array){
    return array.map(function(a){
        return a.media;
    })
}
// Funcao que tira a media geral da sala
function main(array){
    let rstMediaSala = media(separarMedia(array)).toFixed(2);
    let msgMediaSala = `A sala tem ${array.length} alunos.\nA média da sala é: ${rstMediaSala}`
    let rstMediaSexoM = media(separarMedia(mediaPorSexo(alunos_array,'M'))).toFixed(2);
    let msgMediaSexoM = `A Media do sexo Masculino é:` + rstMediaSexoM;
    let rstMediaSexoF = media(separarMedia(mediaPorSexo(alunos_array,'F'))).toFixed(2);
    let msgMediaSexoF = `A Media do sexo Feminino é:` + rstMediaSexoF;
    return `${msgMediaSala}\n${msgMediaSexoM}\n${msgMediaSexoF}`;
}
// Comando para visualizar o array de alunos
//console.log(alunos_array)
//Print funcao Main
console.log(main(alunos_array));