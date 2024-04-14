// * Array.prototype.forEach() - Percorrer elementos do array

const numeros = [10, 20, 30, 40, 50];

function imprimirElemento(elemento) {
  console.log(elemento);
}
numeros.forEach(imprimirElemento);
console.clear();

numeros.forEach((item, index, arrayCompleto) =>
  console.log(index, item, arrayCompleto)
);
console.clear();

// * Array.prototype.find() - Encontrar elemento dentro do Array e retorna-lo, senão undefined

const encontrado = numeros.find((item) => {
  return item < 20 && item > 5;
});
console.log(encontrado);
console.clear();

// Array de Objetos
const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 20,
  },
  {
    nome: "Pessoa 2",
    idade: 30,
  },
  {
    nome: "Pessoa 3",
    idade: 25,
  },
];

let result = pessoas.find((item) => {
  return item.nome === "Pessoa 2";
});
console.log(result);
console.clear();

// * Array.prototype.findIndex() - Encontrar elemento dentro do Array e retornar o INDEX, senão -1

result = pessoas.findIndex((item) => {
  return item.nome === "Pessoa 3";
});
console.log("Indice encontrado =", result);
console.clear();

// * Array.prototype.every() - Verificar se todos elementos do array
// *                           seguem uma determinada verificação retornada pela função

result = numeros.every((item) => item > 0);
console.log(result);
result = pessoas.every((item) => item.idade >= 18);
console.log(result);
console.clear();

// * Array.prototype.some() - Verificar se algum elemento do array
// *                           verifica ou torna verdadeira uma condição retornada pela função

const numeros2 = [-1, 3, 7, -3, 5, 4, 6, 8];
result = numeros2.some((item) => item > 0);
console.log(result);
console.clear();

// * Array.prototype.map() - Chama uma função que é passada para cada elemento do array
// *                                      e devolve um novo array (altera array original)

const quadrado = numeros2.map((item) => item ** 2);
console.log(quadrado);
console.clear();

const carrinho = [
  {
    produto: "Produto 01",
    preco: 10,
    quantidade: 4,
  },
  {
    produto: "Produto 02",
    preco: 25,
    quantidade: 5,
  },
  {
    produto: "Produto 03",
    preco: 30,
    quantidade: 3,
  },
];
const novoCarrinho = carrinho.map((item) => {
  // SPREAD - Desestruturação
  return {
    ...item,
    total: item.quantidade * item.preco,
  };
});
console.log(novoCarrinho);
console.clear();
const pessoa = {
  nome: "Salomão",
  idade: 20,
};
// * Spread (Operator) - Desestruturação
const novaPessoa = {
  ...pessoa,
  peso: 55,
};
console.log(novaPessoa);
console.clear();

// * Array.prototype.filter() - Obter um array baseado no original porém filtrado
// *                            (tamanho pode ser igual ou inferior)
// * filter() -> retorna todos que satisfazem a condição
// * find() -> retorna o primeiro que satisfaz a condição

result = numeros2.filter((item) => item % 2 === 0);
console.log(result);
console.clear();

// * Array.prototype.reduce() - Resulta um elemento único após percorrer todo o Array
// *                              Ex: Soma do array

const valores = [1, 2, 3, 4, 5];
// 1° parâmetro -> Previous value
// 2° parâmetro -> Current value
// 3° parâmetro -> current Index
// 4° parâmetro -> Array completo
result = valores.reduce((acumulador, item) => {
  console.log(acumulador);
  return acumulador + item;
}, 0);
console.log(result);
console.clear();

result = valores.reduce((acumulador, item, _, array) => {
  console.log(acumulador);
  return item / array.length + acumulador;
}, 0);
console.log(result);
console.clear();

result = valores.reduce((acumulador, item) => {
  console.log(acumulador);
  if (item % 2 === 0) return acumulador + item;
  return acumulador;
}, 0);
console.log(result);
console.clear();
console.log(novoCarrinho);
result = novoCarrinho.reduce((acumulador, item) => {
  return acumulador + item.total;
}, 0);
console.log(result);
