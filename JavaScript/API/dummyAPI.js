// * DUMMY API

// * Pegar Usuarios da API

async function getUser() {
  try {
    const response = await fetch("https://dummyapi.io/data/v1/user?created=1", {
      // * definir o autenticador
      headers: {
        "app-id": "661f166f9b32740af9eef9b2",
      },
    });
    const users = await response.json();
    console.log(users.data);
  } catch (err) {
    console.log("Erro ao coletar usuários da API", err);
  }
}

// * Pegar Usuarios da API por ID

const idGetUser = "661f23f75d8af96dac21a9d5";

async function getUserById() {
  try {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user/${idGetUser}`,
      {
        headers: {
          "app-id": "661f166f9b32740af9eef9b2",
        },
      }
    );
    const user = await response.json();
    console.log(user);
  } catch (err) {
    console.log("Erro ao coletar usuário por ID:", err);
  }
}

// * Criar Usuário para inserir no meu Back-End na API

async function createUser() {
  // * Criar objUsuário
  const userData = {
    firstName: "Isaac",
    lastName: "Silva Ferreira",
    email: "isaac@teste.com",
  };

  try {
    // * Não faz sentido coletar a resposta do usuário que acabou de criar por enquanto . . .
    await fetch("https://dummyapi.io/data/v1/user/create", {
      // * definir método a ser utilizado
      method: "POST",
      // * definir o autenticador
      // * definir o tipo do conteúdo do body
      headers: {
        "app-id": "661f166f9b32740af9eef9b2",
        "Content-Type": "application/json",
      },
      // * Definir o corpo do POST
      // * Converter o Objeto Js para String Json
      body: JSON.stringify(userData),
    });
  } catch (err) {
    console.log("Não foi possível criar usuário:", err);
  }
}

const idDelete = "";

async function deleteUser() {
  try {
    await fetch(`https://dummyapi.io/data/v1/user/${idDelete}`, {
      method: "DELETE",
      headers: {
        "app-id": "661f166f9b32740af9eef9b2",
      },
    });
  } catch (err) {
    console.log("Erro ao deletar usuário:", err);
  }
}

getUser();
// getUserById();
// createUser();
// deleteUser();
