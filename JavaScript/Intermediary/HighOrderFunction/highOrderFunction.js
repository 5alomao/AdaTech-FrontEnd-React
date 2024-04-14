// * First Class Function - Função --> variável
// * Função como parâmetro de função
// * High Order Function
// * Função que recebe como parâmetro / uma função que retorna outra função

// * 1 - Retornando função
function welcome(courseName) {
  // Aplicando
  return (studentName) => {
    console.log(`Olá ${studentName}! Seja bem vindo ao curso de ${courseName}`);
  };
}
const displayWelcomeToFrontEndCourse = welcome("Front-End em React");
const displayWelcomeToBackEndCourse = welcome("Back-End em Node.js");
displayWelcomeToFrontEndCourse("Salomão Junior");
displayWelcomeToBackEndCourse("Salomão Ferreira");
console.clear();

// * 2 - Recebendo função como parâmetro
const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;
// Aplicando
const calcular = (num1, num2, operacao) => operacao(num1, num2);
console.log(somar(1, 2)); //3
console.log(calcular(10, 5, multiplicar));
console.log(calcular(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2));
