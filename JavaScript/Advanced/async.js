// Função Assincrona
// * 1. Callbacks - Chamada de Retorno
// * 2. Promises -
// * 3. Resolvendo Promises - async/await

// * CALLBACKS

// * LER ARQUIVO - Assíncrono - EXEMPLO 1
const fs = require("fs");
// console.log("Antes da função de ler o arquivo...");
// fs.readFile("JavaScript/Advanced/arquivo.txt", (erro, conteudo) => {
//   if (erro) {
//     console.log("Erro ao tentar ler o arquivo:", erro);
//   } else {
//     console.log(String(conteudo));
//   }
// });
// console.log("Depois da função de ler o arquivo...");

// * setTimeout() - CRIA UM TIMER - EXEMPLO 2
// console.log("Antes do setTimeout()");
// setTimeout(() => {
//   console.log("Executado após 5 segundos");
// }, 5000);
// setTimeout(() => {
//   console.log("Executado após 1 segundos");
// }, 1000);
// console.log("Depois do setTimeout()");

// * PROMISES - Objeto que guarda promessa de algo que será realizado (Async - Leva tempo)
// * Estado 1: Pending, iniciada e pendente
// * Estado 2: Fullfilled, concretizada com sucesso - then()
// * Estado 3: Rejected, reijeitada houve erro - catch()
// * Exemplo: PEGAR DADOS DO BACK-END (APIs)

// console.log("Antes da promessa");

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("JavaScript/Advanced/arquivo.txt", (erro, conteudo) => {
      if (erro) {
        reject("Erro ao tentar ler o arquivo:", erro);
      } else {
        resolve(String(conteudo));
      }
    });
  });
}

// * then() Recebe callback do Ok
// * catch() Recebe callback do Erro
// * finally() Recebe callback ao encerrar a promessa (executa com sucesso ou fracasso da promessa)

// lerArquivoPromise()
//   .then((resolveReturn) => {
//     console.log("Deu certo:", resolveReturn);
//   })
//   .catch((rejectReturn) => {
//     console.log("Deu erro:", rejectReturn);
//   })
//   .finally(() => {
//     console.log("Executa com sucesso ou fracasso da promessa");
//   });

// * Async / Await - Sequêncial
// * Await - funciona dentro de funções assíncronas
// * Criar funções assíncronas --> async function nomeFunction(){}
// Promessa leva um tempo

async function leituraDeDados() {
  console.log("Executado antes da promessa SER RESOLVIDO");
  // Necessário tratar erros - await e async
  // * try - certo
  // * catch - erro
  // * finally - sempre
  try {
    // Retorna uma Promessa
    // Await - Espera ser resolvido para prosseguir
    const retornoDaPromessa = await lerArquivoPromise();
    console.log(retornoDaPromessa);
    console.log("Executado DEPOIS da promessa SER RESOLVIDO");
  } catch (erro) {
    console.log(erro);
    console.log("Executado DEPOIS da promessa SER REJEITADA");
  } finally {
    console.log("Sempre executa, com sucesso ou erro");
  }
}

leituraDeDados();
