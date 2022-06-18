let dados = [['cairo1','m',1.10],['cairo2','f',1.20],['cairo3','m',1.30]];

function Pessoas(nome, sexo, altura) {
    return {
      nome: nome,
      sexo: sexo,
      altura: altura
    };
  }

let pessoas = [{
  nome:'C1',
  sexo:'m',
  altura: 1.1,
},
{
  nome:'C2',
  sexo:'m',
  altura: 1.2  
}];

let horaAtual = () => {
  let data = new Date();
  return data.getHours() + ':' + data.getMinutes();
}
let altura = [1.1,1.2,1.3];
let {menor,maior} = 0;
menor = altura.reduce(function(menor,altura){
  if (menor>altura){
    menor=altura;
  }
  return menor;
});
maior = altura.reduce(function(maior,altura){
  if (maior<altura){
    maior=altura;
  }
  return maior;
});
console.log(menor);
console.log(maior);



let somar = (a, b) => a+b;
let dobro = a => a*2;
let triplo = () => 3*3;
console.log(somar(2,2));
console.log(dobro(3));
console.log(triplo());
