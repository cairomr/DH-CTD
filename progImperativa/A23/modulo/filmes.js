function filmes(espectador){
    return [espectador,{
        media: media(espectador).toFixed(2),
        quantidade:'quantidade de pessoa que respnderam regular: '+ regular(espectador).toFixed(0),
        opiniao:'porcetagem de pessoas que responderam bom: '+ bom(espectador).toFixed(2) + '%'
    }]
}
function media(espectadores){
    let e = espectadores.map((item) => item.nota);
    return e.reduce((acc,item)=>acc+=item, 0) / espectadores.length;
}

function regular(espectadores){
    //let e = espectadores.map((item) => item.nota);
    let e = espectadores.filter((item)=>item.nota === 1);
    return e.length;
}
function bom(espectadores){
    //let e = espectadores.map((item) => item.nota);
    let e = espectadores.filter((item)=>item.nota === 2);
    return (100 * e.length) / 15;
}

module.exports = filmes;