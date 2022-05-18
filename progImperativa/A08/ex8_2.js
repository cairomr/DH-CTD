function doisValores(x,y){
    if (x > y){
        return x;
    } else {
        return y;
    }
}

function votacao(data){
    let ano = 2022;
    if(ano-data>=16 && ano-data<=76){
        return "Pode Votar";
    } else {
        return "Náo pode votar";
    }
}

function senha(pass){
    if(pass===1234){
        return "ACESSO	PERMITIDO";
    } else {
        return "ACESSO NEGADO";
    }
}

function vendas(quantidade){
    if (quantidade < 12){
        return `Valor total da compra: ` + (0.30 * quantidade).toFixed(2);
    } else {
        return `Valor total da compra: ` + (0.25 * quantidade).toFixed(2);
    }
}

function pesoIdeal(Sexo,Altura){
    if (Sexo === 1){
        return `Mulher, Seu peso ideal: ` + ((62.1	*	Altura)	- 44.7).toFixed(2);
    } else {
        return `Homem, Seu peso ideal: ` + ((72.7	*	Altura)	- 58).toFixed(2);
    }
}

console.log(pesoIdeal(2,2.00))