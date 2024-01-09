import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: hsl(223, 14%, 10%)
  }
  body {
    font-family: 'Poppins', sans-serif;
    
  }

  html, #root {
    height: 100%;
  }

  html, body, #root {
    height: 100%;
  }
  input, button {
    font-family: 'Poppins', sans-serif;
  }
  button {
    cursor: pointer;
  }

`;
