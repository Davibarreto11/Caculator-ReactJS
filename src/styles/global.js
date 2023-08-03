import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: center;
    align-items: center;
  }

  body {
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
    color: #FFF;
    font-family: "RobotoMono", monospace;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  h1 {
    text-align: center;
  }

  button {
    cursor: pointer;
  }
`;
