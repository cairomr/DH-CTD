function podeSubir(altura,acompanhado){
    if (altura>=1.40 || altura >= 2.00){
        return `Acesso autorizado`;
    } else if ((altura < 1.40 && acompanhado) && (altura > 1.20 && acompanhado)) {
        return `Acesso autorizado somente com acompanhante`;
    }
    return `Acesso negado`;
}

console.log(podeSubir(1.21,false))



/** 
    if(opt===1){
        if(time<pipoca){
            msg = "Tempo insulficiente ";
            } else if (time==pipoca*2) {
                msg = "A comida queimou ";
            } else if (time==pipoca*3){
                msg = "Kabuum ";
            } else {
            return fim;
        }
    }

    if(opt===2){
        if(time<macarrao){
            msg = "Tempo insulficiente ";
            } else if (time==macarrao*2) {
                msg = "A comida queimou ";
            } else if (time==macarrao*3){
                msg = "Kabuum ";
            } else {
            return fim;
        }
    }

    if(opt===3){
        if(time<carne){
            msg = "Tempo insulficiente ";
            } else if (time==carne*2) {
                msg = "A comida queimou ";
            } else if (time==carne*3){
                msg = "Kabuum ";
            } else {
            return fim;
        }
    }

    if(opt===4){
        if(time<feijao){
            msg = "Tempo insulficiente ";
            } else if (time==feijao*2) {
                msg = "A comida queimou ";
            } else if (time==feijao*3){
                msg = "Kabuum ";
            } else {
            return fim;
        }
    } else {
        if(time<brigadeiro){
            msg = "Tempo insulficiente ";
            } else if (time==brigadeiro*2) {
                msg = "A comida queimou ";
            } else if (time==brigadeiro*3){
                msg = "Kabuum";
            } else {
            return fim;
        }  
    }

    return fim + msg;

}
**/