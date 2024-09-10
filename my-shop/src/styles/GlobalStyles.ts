import { createGlobalStyle } from "styled-components";

// * CSS in TypeScript/JavaScript
export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f7f7f7;
    color: #222;
  }

  body, button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    transition: filter .3s;

    &:hover {
      filter: brightness(1.2);
    }
  }

`;

