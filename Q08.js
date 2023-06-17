const colecao = [5, 2, -3, 8, -1, 4];
let indice = -1;

for (let i = 0; i < colecao.length; i++) {
  if (colecao[i] < 0) {
    indice = i;
    break;
  }
}

if (indice !== -1) {
  console.log("O primeiro número negativo está no índice " + indice);
} else {
  console.log("Não há números negativos na coleção.");
}
