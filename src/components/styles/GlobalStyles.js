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
    --dark-x: #424242;
    --border: #e8e8e8;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    position: relative;
    overflow-x: hidden;
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
