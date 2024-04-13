const num1 = 10;
const num2 = 12;

console.log(num1 == num2); //F
console.log(num1 === num2); //F
console.log(num1 == "10"); //T
console.log(num1 === "10"); //F
console.log(num1 !== num2); //T

let age = 20;
let age2 = 30;
console.log(age > 18); // T
console.log(age2 > 18); // T
age = 12;
console.log(age2 > 18 && age > 18); // F
console.log(age2 > 18 || age > 18); // T

console.log(!true); //F
