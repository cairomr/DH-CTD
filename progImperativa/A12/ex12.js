//EXERCICIO 1
let alice = [ 23, 82, 46 ];
let bob = [ 45, 8, 32];
let a = 0;
let b = 0;
function ganhador(alice,bob){
    for (let i = 0; i <= alice.length; i++){
        if(alice[i] > bob[i]) {
            a = a + 1;
        } else if (bob[i] > alice[i]){
            b = b + 1;
        }
    }
    return vencedor(a,b);
}
function vencedor(a,b){
let msg = '';
if (a > b){
    msg = `ganhador é Alice: ${a}`;
} else {
    msg = `ganhador é Bob: ${b}`;
}
 return msg;
}
//console.log(ganhador(alice,bob))

//EXERCICIO BONUS - I - ESCREVER DIGITAL HOUSE, DIGITAL OU HOUSE.

function digitalHouse(x,y){
    for(let i = 1; i <= 100; i++){
        if(i % x === 0 && i % y !== 0){
            console.log(i + ' - Digital' + '\n');
            } else if (i % y === 0 && i % x !== 0){
                console.log(i + ' - House' + '\n');
                } else if (i % y === 0 && i % x === 0){
                    console.log(i + ' - Digital House' + '\n');
                }
    }
    return '\n'; 
}
console.log(digitalHouse(1,3));


