let pais = {
    nome:"Brasil",
    capital:"Brasília",
    nascionalidade: function(){
        return "Nasci no "+ this.nome;
    }
};

let carro = {
    marca: "Fiat",
    modelo: "Uno",
};

function Carro(valormarca,valormodelo){
    this.marca = valormarca;
    this.modelo = valormodelo;
}

console.log(carro);
carro1 = new Carro('Vw','Amarok');
carro2 = new Carro('Honda','Civic'); 
console.log(carro1);
