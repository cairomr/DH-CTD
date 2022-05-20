function microondas(opt,time=0){
    // BLOCO DE VARIAVEIS - INTEUITO DE FACILITAR A CONFIG CASO MUDE O TEMPO DE CADA PRATO;
    let pipoca = 10;
    let macarrao = 8;
    let carne = 15;
    let feijao = 12;
    let brigadeiro = 8;
    let comida = '';
    let fim = "Prato pronto, bom apetite! \n";
    let msg = '';
    // CONDICAO INICIAL PARA VALIDAR SE A ENTRADA DO MENU ESTA CORRETA
    if(opt > 5 || opt < 1){
        return msg = "Prato inexistente";;
    }
    // CONDICAO TERNARIA, USADA CASO O USUARIO NAO ENTRE COM VALOR EXTRA DE TEMPO. DESSA FORMA O PROGRAMA NAO EXIBE MENSAGEM EXTRA.
    time === 0 ? time = comida : " ";
    // BLOCO CONDICIONAL, DEFINE TIPO DE COMIDA PARA TER ACESSO A FUNCAO QUE DA RESPOSTA SOBRE O TEMPO
    switch(opt){
        case(1): 
            comida = pipoca;  
            msg = resposta(time);
            break;
        case(2):
            comida = macarrao;
            msg = resposta(time);
            break;
        case(3):
            comida = carne;
            msg = resposta(time);
            break;
        case(4):
            comida = feijao;
            msg = resposta(time);
            break;
        case(5):
            comida = brigadeiro;
            msg = resposta(time);
            break;
        default:
            msg = "Prato inexistente";
            break;
    }
    // FUNCAO QUE DEFINE A MENSAGEM CONDICIONAL SOBRE A COMIDA.
    function resposta(time) {
        if(time<comida){
            msg = "Tempo insulficiente ";
            } else if (time>=comida*2 && time<comida*3) {
                msg = "A comida queimou ";
            } else if (time>=comida*3){
                msg = "Kabuum ";
            } else {
                msg = "";
            }
        return msg;
    }
    // RETORNO DA FUNCAO MICROONDAS
    return fim + msg; 
}// TESTE DA FUNCAO MICROONDAS
console.log(microondas(0));