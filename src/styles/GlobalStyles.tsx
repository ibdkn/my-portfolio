import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle `
  *, 
  *::before, 
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul li {
    list-style: none;
  }
  
  button {
    font-family: inherit;
    color: inherit;
    cursor: pointer;
  }
  
  body {
    margin: 0;
    font-family: "Fira Code", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.primaryBg};
  }
  
  section {
    padding: 54px 0;
  }
`