import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    // this.contador = 0;
    // * Utilizando estados do React, alterando valor por meio de métodos
    // * A aplicação renderiza novamente ao update de um valor
    this.state = {
      contador: 0,
      nome: "",
      senha: "",
    };
  }
  render() {
    return (
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        <h1>{this.state.contador}</h1>
        <div>
          <button
            onClick={() => {
              console.log("Diminuindo...");
              this.setState({ contador: this.state.contador - 1 });
              console.log(this.contador);
            }}
          >
            Diminuir
          </button>
          <button
            onClick={() => {
              console.log("Aumentando...");
              this.setState({ contador: this.state.contador + 1 });
              console.log(this.contador);
            }}
          >
            Aumentar
          </button>
        </div>

        <form style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.nome}
            onChange={(event) => {
              this.setState({ nome: event.target.value });
              console.log(this.state.nome);
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={this.state.senha}
            onChange={(event) => {
              this.setState({ senha: event.target.value });
            }}
          />
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
