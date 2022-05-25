// 1 - Acessar elemento espec[ifico do Array

let listaNome = ['Cairo','Ramon','Santos','Oliveira'];
console.log(listaNome.push('Cairo'));
console.log(listaNome);

listaNome = ['Cairo','Ramon','Santos','Oliveira'];
console.log(listaNome.pop());
console.log(listaNome);

listaNome = ['Cairo','Ramon','Santos','Oliveira'];
console.log(listaNome.shift());
console.log(listaNome);

console.log(listaNome.join());
listaNome = ['Cairo','Ramon','Santos','Oliveira'];
console.log(listaNome);

let str = 'una string qualquer';
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length-2]); 

function convertirAMayusculas(array){
    array[0] = array[0].toUpperCase()
    array[1] = array[1].toUpperCase()
    array[2] = array[2].toUpperCase()
    array[3] = array[3].toUpperCase()
    array[4] = array[4].toUpperCase()
    return array
  }

  função pasajeDeElementos(array1, array2) { 
    array1.push(array2.pop().  toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    array1.push(array2.pop(). toUpperCase()) 
    array de retorno1  
   }

   const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  comparacionesAsiaEuropa[0] = asia[0] === europa[0]
  comparacionesAsiaEuropa[1] = asia[1] === europa[1]
  comparacionesAsiaEuropa[2] = asia[2] === europa[2]
  comparacionesAsiaEuropa[3] = asia[3] === europa[3]

  const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = []
  comparacionesAsiaEuropa[0] = asia[0] === europa[0]
  comparacionesAsiaEuropa[1] = asia[1] === europa[1]
  comparacionesAsiaEuropa[2] = asia[2] === europa[2]
  comparacionesAsiaEuropa[3] = asia[3] === europa[3]


