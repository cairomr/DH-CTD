let produtos = [];
let n1 = 'Televisão 30';
let n2 = 'Geladeira 228L';
let n3 = 'Fogão 4 Bocas';

function Carrinho(nomeProduto, valorProduto, qualidadeProduto, status){
    //let array = []
    this.nomeProduto = nomeProduto,
    this.valorProduto = valorProduto,
    this.qualidadeProduto = qualidadeProduto,
    this.status = status
    //return array[nomeProduto,valorProduto,qualidadeProduto,status];
}

function filtroCarrinho(obj,min,max){
    let array = obj.filter(function(item){
        if(item >= min && item <= max){
           console.log(item); 
        }
    } );
    return array;
}
function somaCarrinho(produtos){
    let valor = produtos.map((item) => item.valorProduto);
    let msg = 'O valor total dos produtos no carrinho: ';
    return msg + valor.reduce((acc,soma)=>acc+=soma);
}

produtos.push(
    new Carrinho(n1,1500,10,true),
    new Carrinho(n2,1400,9,true),
    new Carrinho(n3,2100,8,false),
);
let min = 482;
let max = 1600;
console.log(filtroCarrinho(produtos,482,1600));