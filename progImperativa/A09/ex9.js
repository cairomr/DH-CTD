function podeSubir(altura,acompanhado){
    if (altura>=1.40 || altura >= 2.00){
        return `Acesso autorizado`;
    } else if ((altura < 1.40 && acompanhado) && (altura > 1.20 && acompanhado)) {
        return `Acesso autorizado somente com acompanhante`;
    }
    return `Acesso negado`;
}

console.log(podeSubir(1.21,false))