const fs = require("fs");

// * LENDO UM ARQUIVO JSON
// fs.readFile("JavaScript/Json/texto.json", (err, data) => {
//   if (err) {
//     console.log("Erro:", err);
//   } else {
//     // Buffer com os dados do arquivo
//     console.log(typeof data);
//     // Convertendo Buffer para Objeto Js
//     const objetoJs = JSON.parse(data);
//     console.log(objetoJs.aluno);
//   }
// });

// * CONVERTENDO UM JSON EM FORMATO DE STRING PARA UM OBJETO JAVASCRIPT

const jsonString = '{"nome":"Salomão"}';
console.log(typeof jsonString, jsonString);
console.log(typeof JSON.parse(jsonString), JSON.parse(jsonString));
console.clear();

// * CONVERTER UM OBJETO JAVASCRIPT EM UMA STRING JSON

const pessoa = {
  nome: "Salomão",
  idade: 20,
  aula: "Front-End React",
};

console.log(pessoa);
console.log(JSON.stringify(pessoa));
