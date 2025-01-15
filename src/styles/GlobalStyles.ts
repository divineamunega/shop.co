import { createGlobalStyle, css } from "styled-components";
import variables from "./variables";
import { lgScreen, mdScreen, smScreen } from "./mixins";
const GlobalStyle = createGlobalStyle`
:root {
    // Colors
    --background-color:rgba(${variables.backgroundColor});
    --primary-color: rgba(${variables.primaryColor});

    // Fonts
    --primary-font: 'Satoshi', sans-serif;
    --secondary-font: "IntegralCF" ;
  }
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
}

::selection{
    color: rgba(${variables.backgroundColor});
    background-color: rgba(${variables.primaryColor});

}
html {
    font-size: 55.5%;

  ${smScreen(css`
		font-size: 62.5%;
	`)}

  ${mdScreen(css`
		font-size: 70%;
	`)}

  ${lgScreen(css`
		font-size: 75%;
	`)}

}

ul {
    list-style: none;
     
}

a {
    text-decoration: none;
    user-select: none;
}


button {
    cursor: pointer;
    user-select: none;
}

`;

export default GlobalStyle;
