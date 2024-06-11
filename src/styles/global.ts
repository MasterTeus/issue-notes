import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0
}

body {
    background-color: ${({ theme }) => theme.colors.baseBackground};
    color: ${({ theme }) => theme.colors.baseText};
    height: 100vh;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
}

`;
