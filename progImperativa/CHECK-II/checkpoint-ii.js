// 1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

function validador3(um,dois,tres){
    if(um > dois && um > tres){
        return `O numero ${um} é o maior dos 3 digitados`; 
    } else if (um < dois && dois > tres){
        return `O numero ${dois} é o maior dos 3 digitados`; 
    } else {
        return `O numero ${tres} é o maior dos 3 digitados`;
    }
}

// 2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
// idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

function doarSangue(idade){
    if(idade >= 18 && idade <= 67){
        return "Você pode doar sangue!";
    }
}

// 3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

function valor(numero){
    let x = numero > 0 ? `O número digitado: ${numero} é positivo`:`O número digitado: ${numero} é negativo`;
    return x;
}

// 4. Faça um programa para a leitura de duas notas de um aluno.  
//    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
//    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
//    A mensagem “Reprovado” se a média for menor de do que 7;

function validaNota(x,y){
    msg = '';

    let media = calculaMedia(x,y);

    function calculaMedia(x,y){
        return (x+y)/2;
    }

    if(media==10){
            msg = "Aprovado com Distinção";
    } else if (media>=7 && media<10){
            msg = "Aprovado";
    } else {
            msg = "Reprovado";
    } 
    return `Sua média é: ${media} e você está ${msg}`;  
}