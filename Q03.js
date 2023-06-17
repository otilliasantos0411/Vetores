const readlineSync = require('readline-sync');


// Vetor para armazenar os nomes dos alunos
let nomes = [];

// Vetor para armazenar as notas dos alunos
let notas = [];

// Leitura dos nomes e notas dos alunos
for (let i = 0; i < 5; i++) {
  let nome = readlineSync.questionFloat("Digite o nome do aluno " + (i + 1) + ":");
  let nota1 =  readlineSync.questionFloat("Digite a primeira nota do aluno " + (i + 1) + ":");
  let nota2 =  readlineSync.questionFloat("Digite a segunda nota do aluno " + (i + 1) + ":");
  
  nomes.push(nome);
  notas.push([nota1, nota2]);
}

// Cálculo da média e exibição dos dados dos alunos
console.log("Listagem de alunos:");
for (let i = 0; i < 5; i++) {
  let nomeAluno = nomes[i];
  let nota1 = notas[i][0];
  let nota2 = notas[i][1];
  let media = (nota1 + nota2) / 2;
  
  console.log("Aluno: " + nomeAluno);
  console.log("Nota 1: " + nota1);
  console.log("Nota 2: " + nota2);
  console.log("Média: " + media.toFixed(2)); // Limitando a duas casas decimais
  console.log("------------");
}
