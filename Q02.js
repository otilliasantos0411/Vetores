const readlineSync = require('readline-sync');


// Vetor para armazenar as notas dos alunos
let notas = [];

// Vetor para armazenar os nomes dos alunos
let nomes = [];

// Leitura das notas e dos nomes dos alunos
for (let i = 0; i < 5; i++) {
  let nome = readlineSync.questionFloat("Digite o nome do aluno " + (i + 1) + ":");
  let nota = readlineSync.questionFloat("Digite a nota do aluno " + (i + 1) + ":");
  
  nomes.push(nome);
  notas.push(nota);
}

// Exibição dos nomes dos alunos com nota maior que 5.0
console.log("Alunos com nota maior que 5.0:");
for (let i = 0; i < 5; i++) {
  if (notas[i] > 5.0) {
    console.log(nomes[i]);
  }
}
