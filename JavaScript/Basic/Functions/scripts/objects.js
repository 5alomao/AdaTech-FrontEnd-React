// Object Literal

// Array usa colchetes
const array = ["Salomão", 20, true];

// Objeto usa chaves
const pessoa = {
  nome: "Salomão",
  idade: 20,
  estudando: true,
  hobbies: ["Academia", "Pescar", "Futebol"],
  // funcao: function () {

  // },
  funcao: () => {
    console.log("Opa");
  },
};

// console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.estudando);
console.log(pessoa["hobbies"]);
console.clear();

// Adicionar Atributo
pessoa.profissao = "Desenvolvedor";
console.log(pessoa);
console.clear();

// Remover Atributo
delete pessoa.estudando;
console.log(pessoa);
console.clear();

pessoa.funcao();
console.clear();

const idade = 20;
const altura = 171;

const obj = {
  // idade: idade,
  idade, // se a variavel existir
  // altura: altura,
  altura,
};
console.log(obj.idade);
console.log(obj.altura);
console.clear();

const { nome, hobbies } = pessoa;
console.log(nome, hobbies);
