import {createGlobalStyle} from "styled-components";





export const GlobalStyles = createGlobalStyle<TemplateStringsArray>`
  *,
  *::before,
  *::after {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    

    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`