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
`;
