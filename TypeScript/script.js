"use strict";
// * Inferência DE Tipos
let numero = 20;
let nome = "Salomão";
let correto = true;
const pi = 3.1415; // constante não altera valor, possui o tipo igual ao valor
// * Tipagem Explicita
// numero: number;
// palavra: string;
// existe: boolean;
let resultado = numero * pi;
// const nomeUsuario = prompt("Qual seu nome:");
// console.log(nomeUsuario?.toUpperCase());
// * TIPAGEM DE ARRAYS
const numeros = [1, 2, 3, 4, 5];
// const numeros: number[] = [1, 2, 3, 4, 5]
// const numeros: Array<number> = [1, 2, 3, 4, 5];
const letras = ["a", "b", "c", "d", "e"];
// const letras: string[] = ["a", "b", "c", "d", "e"];
// Não é muito legal
const misto = ["Salomão", 20];
// ! Qualquer coisa - Anulando TypeScript (evite)
const qualquer = ["Salomão", 20];
const idades = [];
// idades.push("20"); erro
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idade) => {
    return idade < 18;
});
console.log(menoresDeIdade);
// * TUPLA --> conjunto de valores
const pessoaTupla = ["Salomão", 20];
const pessoa = {
    nome: "Salomão",
    idade: 20,
    estudando: true,
};
const pessoa2 = {
    nome: "Isaac",
    idade: 25,
    // estudando: true,
};
function chooseNumber(num1, num2, 
// UNINDO DOIS TIPOS --> Union Types - Literal Types
// Type Aliases --> Apelido
criterio) {
    // retorno da função --> number
    switch (criterio) {
        case "greater":
            return num1 > num2 ? num1 : num2;
        case "lower":
            return num1 < num2 ? num1 : num2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return num1;
            return num2;
    }
}
const escolhido = chooseNumber(40, 20, "greater");
console.log(escolhido);
const pessoas = {
    "123-123-123-12": {
        nome: "Salomão",
        idade: 20,
        estudando: true,
    },
    "321-321-321-32": {
        nome: "Pessoa 2",
        idade: 18,
        estudando: false,
    },
};
console.log(pessoas);
