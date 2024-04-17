// * FETCH API
// console.log("FETCH API")

// * Requisição HTTP, função assíncrona
// * Retorna uma Promise
// * Tipo GET só URL funciona

// * then, catch - EXEMPLO 01

// fetch("https://viacep.com.br/ws/01001000/json/")
//   .then((response) => {
//     // * retorna no formato response
//     // console.log(response);
//     // * .json() - transorma a resposta em json
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// * async e await - - EXEMPLO 02
// * try/catch - tratar erros
async function obterDadosCEP() {
  try {
    const response = await fetch("https://viacep.com.br/ws/37750000/json/");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Deu errado:", err);
  } finally {
    console.log("Requisição finalizada !");
  }
}

obterDadosCEP();
