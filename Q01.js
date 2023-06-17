const readlineSync = require('readline-sync')


let nota = [] 
let maior5= [] 
let contador = 0
for(i=1; i<=10; i++){
    nota[i]=p=  readlineSync.questionFloat("Digite a " +i+" nota: ")
    if(nota[i]>5){
        maior5[contador]=nota[i]
        contador++
    }
}

console.log("Notas maiores que 5: "+maior5)
