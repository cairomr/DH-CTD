function conversorPolCm(valor){
    let pol = 2.54
    cm = pol * valor;
    return console.log(cm);
}

function conversorURL(texto){
    return console.log("http://"+ texto + "/")
}

function conversorFrase(frase){
    return console.log(frase + "!")
}

function conversorIdadeDog(idade){
    return console.log(idade * 7);
}

function salarioHoras(salario = 0, horas = 160){
    let salarioBase = salario / horas;
    return console.log(`Valor da hora ${salarioBase.toFixed(2)}, com base em ${horas} horas por mês!`);
}

function IMC(peso,altura){
    altura = altura / 100;
    let imc = peso / (altura * altura);
    return console.log(imc.toFixed(2));
}

function stringMaiusculas(texto){
    return texto.toUpperCase();
}

let text = stringMaiusculas(`cairo`);
console.log(text);

function tipoNaVariavel(x){
    return typeof(x);
}

function circunferencia(raio){
    let comprimento = 2 * Math.PI * raio;
    return comprimento.toFixed(2);
}

console.log(circunferencia(10));
