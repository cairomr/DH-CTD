//IMPORTAR MODULOS
const pessoas = require('./modulo/pessoas');
const grupo = require('./modulo/grupo');

//USO DA FUNCAO CONSTRUTURA
let group = [];
group.push(new pessoas('masculino',1.55),
            new pessoas('masculino',1.61),
            new pessoas('feminino',1.77), 
            new pessoas('feminino',1.78),    
            new pessoas('feminino',1.48), 
            new pessoas('feminino',1.68), 
            new pessoas('feminino',1.88),  
);
//APRESENTACAO DO VETOR PESSOAS CRIADAS
console.log('================== PESSOAS ==================');
console.log(group);
//USO DA FUNCAO PARA CRIAR UM GRUPO DE OBJETOS COM O RESUMO DO PROGRAMA
console.log('================== RESUMO ==================');
console.log(grupo(group));