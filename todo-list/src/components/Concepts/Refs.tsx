import React, { FormEvent, useRef } from "react";

export const Refs: React.FC = () => {
  // * Muito utilizada para manipular elementos do DOM
  // * Uncontrolled Forms - não Re-renderiza todos componentes
  const inputNameRef = useRef<HTMLInputElement>(null); //current: null
  const inputEmailRef = useRef<HTMLInputElement>(null); //current: null
  const inputPasswordRef = useRef<HTMLInputElement>(null); //current: null

  console.log(inputNameRef);

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
    console.log("submit");
    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPasswordRef.current?.value);
  }

  return (
    <div
      style={{
        maxWidth: `1200px`,
        margin: "0 auto",
        padding: "0 2rem",
        width: "100%",
      }}
    >
      <h1>useRef()</h1>
      <form onSubmit={handleOnSubmit}>
        {/* Atribui ao current o 'INPUT' */}
        <input type="text" placeholder="Nome completo" ref={inputNameRef} />
        <br />
        <input type="email" placeholder="E-mail" ref={inputEmailRef} />
        <br />
        <input type="password" placeholder="Senha" ref={inputPasswordRef} />
        <br />
        <button type="submit">Submeter</button>
      </form>
    </div>
  );
};
