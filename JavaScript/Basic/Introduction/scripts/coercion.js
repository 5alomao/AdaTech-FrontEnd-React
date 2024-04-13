// Type Coersion
const prompt = require("readline-sync");

// const age = prompt.question("Qual sua idade:");
// const ageNumber = Number(age);
// console.log(typeof age, typeof ageNumber);

console.log(Number("A")); //NaN - Not an Number

console.log(String(10), typeof String(10));

console.log(Boolean(2)); //true
console.log(Boolean(0)); //false - Just 0 = false in boolean type

// Implicit Coersion

console.log(1 + "1"); // 11 - concatenated - ='+' String(Number)
console.log(10 - "5"); // 5 - !'+' - Number(String)

let n = 1 + "1";
n = n - 1;
console.log(n); // 10

// Qual a saida
console.log(2 + 3 + 4 + "5"); // 9 + 5 = 95

// Qual a saida
console.log("5" + 2 + 3 + 4); // '52' + 3 + 4 = 5234

// Qual a saida
console.log("10" - "4" - "3" - 2 + "5"); // 15
