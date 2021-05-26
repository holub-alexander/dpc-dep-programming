import { createGlobalStyle } from 'styled-components';

export const GlobalArticleStyles = createGlobalStyle`
  article {
    text-align: center;
    color: #000;
    font-family: georgia, serif;
    line-height: 1.6;
    margin: 0;
    margin: auto;
    max-width: 1060px;
    color: rgb(10, 10, 10);
  }

  article a {
    outline: none !important;
    font-weight: 700;
    text-decoration: none;
  }

  article a:link {
    color: #c00;
  }

  article a:visited {
    color: #606;
  }

  article a:hover {
    color: #606;
  }

  article a:active {
    color: #900;
    outline: none;
  }

  article h1 {
    font-size: 47px;
    line-height: 1.35;
    font-style: normal;
    margin: 0.6em 0 0.8em;
  }

  article h2 {
    font-weight: 700;
    font-size: 41px;
    margin: 1em 0 0.8em;
  }

  article h3 {
    font-weight: 400;
    font-size: 37px;
    margin: 1em 0 0.8em;
  }

  article h4 {
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 0.1em;
    margin: 1.5em 0 0.8em;
  }

  article h5 {
    font-weight: 400;
    font-size: 29px;
    margin: 1.5em 0 0.8em;
  }

  article h6 {
    font-size: 24px;
    letter-spacing: 0.1em;
    font-weight: 400;
    margin: 1.5em 0 0.8em;
  }

  article p {
    text-align: left;
    font-size: 21px;
    margin: 1em 0 0;
  }

  article p.lead {
    font-size: 27px;
    margin: 1em 0;
  }

  article p + p {
    margin: 0;
    text-indent: 1.5em;
  }

  article p + ul,
  p + ol,
  p + dl {
    margin-bottom: 1.5em;
  }

  article p.lead + p {
    text-indent: 0;
  }

  article blockquote {
    border-left: 5px solid var(--accent);
    padding-left: 1.5em;
    margin: 1em 0;
  }

  article blockquote small {
    display: block;
    line-height: 1.7em;
  }

  article ul,
  ol,
  dl {
    text-align: left;
  }

  article li {
    font-size: 21px;
  }

  article dt {
    font-weight: 700;
  }

  article code {
    background-color: #ccf8f6;
    font-family: courier, monospace;
  }

  article p > code {
    padding: 0.25em;
    background: #eee;
  }

  article pre {
    text-align: left;
    font-size: 18px;
    background-color: #dbdcdd;
    overflow-x: auto;
  }

  article hr {
    height: 0;
    color: #eee;
    border: 1px solid #eee;
    margin: 2em 0 1em;
  }

  .normal {
    font-weight: 400;
  }

  .quiet {
    color: #999;
  }

  .pull-left {
    float: left;
    margin: 0.5em 2em 1em 0;
  }

  .pull-right {
    float: right;
    margin: 0.5em 0 1em 2em;
  }

  @media (max-width: 500px) {
    body {
      font-size: 80%;
    }
    img {
      max-width: 100% !important;
      height: auto !important;
      float: none !important;
    }
  }
`;
