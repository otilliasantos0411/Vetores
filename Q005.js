const readlineSync = require('readline-sync');

let numero = []

for(i=1;i<=3;i++){
    numero[i]= readlineSync.questionFloat("Digite um número: ")
}
for(i=3;i>=1;i--){
    console.log(numero[i])
}