function grupo(vetor){
    let vetorMasc = ordenar(vetor,'masculino');
    let vetorFem = ordenar(vetor,'feminino');
    return [{
        sexo:'masculino',
        quantidade:contador(vetorMasc),
        media:media(vetorMasc).toFixed(2)
    },
    {
        sexo:'feminino',
        quantidade:contador(vetorFem),
        media:media(vetorFem).toFixed(2)
    }]
}
function ordenar(pessoas,sexoE){
    return pessoas.filter(
        function(pessoas){
            return pessoas.sexo === sexoE
        }
    )
}
function media(pessoas){
    let p = pessoas.map((item) => item.altura);
    return p.reduce((acc,item)=>acc+=item, 0) / pessoas.length;
}
function contador(pessoas){
    return pessoas.length;
}

module.exports = grupo;