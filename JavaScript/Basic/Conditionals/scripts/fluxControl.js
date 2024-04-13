const prompt = require("readline-sync");

const age = Number(prompt.question("Qual eh a sua idade:"));

// IF/ELSE
if (age >= 18) {
  console.log("Você eh maior de idade");
} else {
  console.log("Você não eh maior de idade");
}

// SWITCH/CASE - SPECIF VALUES
const permissoes = "admin"; // aluno - professor - admin

switch (permissoes) {
  case "aluno":
    console.log("Você só pode visualizar as aulas.");
    break;
  case "professor":
    console.log("Você pode alterar as aulas e adicionar exercícios");
    break;
  case "admin":
    console.log("Você pode fazer o que quiser no sistema.");
    break;
  default:
    console.log("Não sei que você eh no sistema.");
}

// TERNARY

// if (age >=18 ? console.log("Você eh maior de idade") : console.log("Você não eh maior de idade"));

const message = age >= 18 ? "Maior de Idade" : "Menor de Idade";
console.log(message);

// Thuthy(!= falsy) - Falsy (0, undefined, null, '', NaN)

// if (2) {
// } true
// if ({}) {
// } true
// if ("string") {
// } true
// if ("") {
// } //false
// if (undefined) {
// } //false

if (0) {
  console.log("sim");
}
if (" ") {
  console.log("sim2");
}

if ("") {
  console.log("sim3");
}

if ("1" == "-1") {
  console.log("sim4");
}
if (!null) {
  console.log("sim5");
}
if (1) {
  console.log("sim6");
}
