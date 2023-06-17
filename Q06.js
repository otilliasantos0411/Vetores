const readlineSync = require('readline-sync');


let elementos = readlineSync.questionFloat("Quantos numero deseja inserir: ")
let numero = []
for(i=1;i<=elementos;i++){
    numero[i]=readlineSync.questionFloat("Digite um numero: ")
}

for(i=elementos;i>0;i--){
    console.log(numero[i])
}