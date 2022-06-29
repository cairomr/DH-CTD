//VARIAVEIS GLOBAIS
let produtos = [];
let n1 = 'Televisão 30';
let n2 = 'Geladeira 228L';
let n3 = 'Fogão 4 Bocas';

//FUNCAO CRIADORA DO CARRINHO DE COMPRAS
function Carrinho(nomeProduto, valorProduto, qualidadeProduto, status){
    this.nomeProduto = nomeProduto,
    this.valorProduto = valorProduto,
    this.qualidadeProduto = qualidadeProduto,
    this.status = status
}
// FUNCAO DO FILTRO E SUAS VARIAVEIS
function filterCarrinho(obj){
    let min = 482;
    let max = 1600;
    let qualidade = 5;
    let status = true;
    let retorno = [];
    for(dado in obj){
        retorno = obj.filter( (item) => {
            if(item.valorProduto >=min && item.valorProduto <=max && item.qualidadeProduto>qualidade && item.status === status){
                return item;
            }
        });
    }
    return retorno;
}
//FUNCAO SOMA TOTAL DOS ITENS 
function somaCarrinho(produtos){
    let valor = produtos.map((item) => item.valorProduto);
    let msg = 'O valor total dos produtos no carrinho: ';
    return msg + valor.reduce((acc,soma)=>acc+=soma);
}
//ALIMENTACAO DO VETOR DE PRODUTOS
produtos.push(
    new Carrinho(n1,1500,10,false),
    new Carrinho(n2,1400,9,true),
    new Carrinho(n3,400,8,true),
);
//SAIDA DE DADOS PARA MONITOR
console.log('Resultado da busca: ');
console.log(filterCarrinho(produtos));
console.log();
console.log(somaCarrinho(produtos));
console.log();