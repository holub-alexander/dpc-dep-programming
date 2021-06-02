import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --accent: #0642cd;
    --light-xl: #fff;
    --light-x: #f8f8f8;
    --dark-x: #424242;
    --dark-xl: #000;
    --border: #e8e8e8;
    --warning: #ea2d2d;
    --bg-light: #faf9f9;
    --bg-dark: #ededed;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    position: relative;
    overflow-x: hidden;
    background-color: #faf9f9 !important;
  }

  main {
    padding-top: 80px;
  }

  img {
    display: block;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .hidden {
    position: absolute;
    clip: rect(0 0 0 0);
    margin: -1px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    opacity: 0;
  }
`;
