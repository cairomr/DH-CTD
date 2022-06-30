let numeros = [1,7,3,4,5,6,2];
numeros.splice(2,2,20);
//console.log(numeros);

//INVERTER SORT
numeros = [1,7,3,5,4,6,2];
numeros.sort((a,b)=>{ (a>b)? 0:  )
                if(a>b){
                   return -1; 
                }
                if(a<b){
                    return 1;
                }
                return 0;
            });
console.log(numeros);

