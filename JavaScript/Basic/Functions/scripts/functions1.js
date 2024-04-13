// Bloco de código reaproveitável
// DRY - Don't Repeat Yourself --> Functions

// Funções
function saudacoes(nome, curso = "Front-End | React") {
  return `Olá ${nome}! Bem vindo ao curso de ${curso}`;
}
const msg = saudacoes("Salomão", "Back-End | Node.js");
console.log(msg);
console.clear();

// Funções Anônimas
// FIRST CLASS FUNCTION - Js Trata funções como variáveis
const calcDobro = function (num) {
  return num * 2;
};
console.log(calcDobro(2));
console.clear();

// Arrow Functions
// entrada - processamento - saida
const subtrair = (num1, num2) => {
  return num1 - num2;
};
console.log(subtrair(10, 4));
console.clear();

const multiplicar = (num1, num2) => num1 * num2;
console.log(multiplicar(10, 4));
