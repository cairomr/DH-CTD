//variaveis
let alunos_array = [];
// Alimentacao de dados
alunos_array.push( 
    alunos('Carlos','M',1,[7,7,7],'7B'),
    alunos('Ramon','M',2,[9,8,8],'7B'),
    alunos('Breno','M',3,[7,9,9],'7B'),
    alunos('Carla','F',4,[8,7,7],'7B'),
    alunos('Monique','F',5,[5,10,7],'7B'),
    alunos('Bianca','F',6,[10,2,7],'7B'),
    alunos('Andreia','F',7,[10,10,9],'7B'),
    alunos('Enzo','M',8,[7,10,10],'7B'),
    alunos('Sophia','F',9,[5,7,7],'7B'),
    alunos('Sheyla','F',10,[10,10,10],'7B'),
    alunos('Moana','F',11,[8,9,7],'7B'),
    alunos('Mawe','M',12,[9,9,9],'7B'),
    alunos('Olaf','M',13,[2,2,2],'7B'),
    alunos('Elza','F',14,[9,9,9],'7B'),
    alunos('Anna','F',11,[8,9,7],'7B'),
    alunos('Petter Pan','M',12,[3,5,9],'7B')
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
function tipoSexo(array,sexoEscolhido){
    return array.filter(
        function(array){
            return (array.sexo === sexoEscolhido);
        }
    )
}

//Funcao de tirar a media das notas
 function contador(array){
    let soma = 0;
    for (let n of array){
            soma++;
    }
    return soma;
 }

//Funcao que separa a media dos alunos e cria uma array de retorno
function separarMedia(array){
    return array.map(function(a){
        return a.media;
    })
}
// Funcao que tira a media geral da sala
function main(array){
    let masc = 'M';
    let femi = 'F';
    let rstMediaSala = media(separarMedia(array)).toFixed(2);
    let meninos = contador(tipoSexo(array,masc));
    let meninas = contador(tipoSexo(array,femi));
    let msgMediaSala = `\nA sala tem ${array.length} alunos.
            \nMeninos da sala: ${meninos}
            \nMeninas da sala: ${meninas}
            \nA média da sala é: ${rstMediaSala}\n`
    let rstMediaSexoM = media(separarMedia(tipoSexo(alunos_array,masc))).toFixed(2);
    let msgMediaSexoM = `A média do sexo Masculino é: ${rstMediaSexoM}`;
    let rstMediaSexoF = media(separarMedia(tipoSexo(alunos_array,femi))).toFixed(2);
    let msgMediaSexoF = `A média do sexo Feminino é: ${rstMediaSexoF}`;
    return `${msgMediaSala}\n${msgMediaSexoM}\n${msgMediaSexoF}`;
}
// Comando para visualizar o array de alunos
//console.log(alunos_array)
//Print funcao Main
console.log(main(alunos_array));