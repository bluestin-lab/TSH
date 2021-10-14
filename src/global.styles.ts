import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        color: #1A1B1D;

        &.modal-open {
            overflow: hidden;
        }
    }
  
    html {
        box-sizing: border-box;
    }
  
    *,
    *:before,
    *:after {
        box-sizing: inherit; 
        font-family: "Nunito", sans-serif;
    }
 `;
