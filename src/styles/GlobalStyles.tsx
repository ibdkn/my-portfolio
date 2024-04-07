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
    transition: .2s ease-in-out;
    
    &:hover {
      transition: .2s ease-in-out;
    }
  }
  
  ul li {
    list-style: none;
  }
  
  button {
    font-family: inherit;
    color: inherit;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: .4s ease-in-out;

    &:hover {
      transition: .4s ease-in-out;
    }
    
    a, a:hover {
      transition: none;
    }
  }
  
  html {
    min-width: 360px;
  }
  
  body {
    margin: 0;
    font-family: "Fira Code", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.primaryBg};
    min-width: 375px;
  }
  
  section {
    padding: 54px 0;
  }
`