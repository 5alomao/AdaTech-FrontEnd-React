const prompt = require("readline-sync");
// * Ex 1
let saldo = Number(prompt.question("Qual seu saldo:"));
while (saldo < 0) {
  console.log("Saldo Inválido.");
  saldo = Number(prompt.question("Insira novamente:"));
}
console.log(saldo);

// * Ex 2
let note = Number(prompt.question("Informe a nota:"));
let sum = 0;
let cont = 0;
while (note >= 0) {
  cont++;
  sum += note;
  note = Number(prompt.question("Informe a proxima nota:"));
}
console.log("Soma =", sum);
console.log("Média =", sum / cont);

// * Ex - 3
let num = parseInt(Math.random() * 10);
let escolha = Number(prompt.question("Escolha um numero [0 a 10]: "));
while (escolha !== num) {
  escolha = Number(prompt.question("Voce nao acertou! Tente novamente: "));
}
console.log("Parabens você conseguiu!");

// * Ex - 4
do {
  saldo = Number(prompt.question("Insira um saldo valido:"));
} while (saldo < 0);
