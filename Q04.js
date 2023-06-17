const readlineSync = require('readline-sync');

// Vetor para armazenar as notas dos alunos
let notas = [];

// Leitura das notas dos alunos
for (let i = 0; i < 80; i++) {
  let nota = readlineSync.questionFloat("Digite a nota do aluno " + (i + 1) + ":");
  notas.push(nota);
}

// Exibição das notas dos alunos
console.log("Notas dos alunos:");
for (let i = 0; i < 80; i++) {
  console.log("Aluno " + (i + 1) + ": " + notas[i]);
}

// Cálculo da média da turma
let somaNotas = 0;
for (let i = 0; i < 80; i++) {
  somaNotas += notas[i];
}
let mediaTurma = somaNotas / 80;

// Exibição da média da turma
console.log("Média da turma: " + mediaTurma.toFixed(2)); // Limitando a duas casas decimais
