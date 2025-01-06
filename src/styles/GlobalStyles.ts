import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Satoshi-Variable";
}

html {
  font-size: 62.5%;
}

`;

export default GlobalStyle;
