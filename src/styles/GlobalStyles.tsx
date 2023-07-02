import {createGlobalStyle, DefaultTheme} from "styled-components";



// export const GlobalStyles = createGlobalStyle<TemplateStringsArray>
export const GlobalStyles = createGlobalStyle<DefaultTheme>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Roboto',  sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
`