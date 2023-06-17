let vetor = [1,6,2,5,2]
let numero = 2
let indices = []
let j=0;
function mostrarIndices(vetor,numero){
    for(i=1;i<=vetor.length;i++){
        if(vetor[i]==numero){
           indices[j]=i
           j++
        }
    }
    console.log(`Indicês onde o número aparece: ${indices}`)
}

mostrarIndices(vetor,numero)