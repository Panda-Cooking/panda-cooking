import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  :root{
    --Color-brand-1:#ff8787;
    --Color-brand-2:#ffc9c9;
    --Color-brand-3:#fff5f5;
    --Color-gray-0:#f8f9fa;
    --Color-gray-1:#dee2e6;
    --Color-gray-2:#adb5bd;
    --Color-gray-3:#343a40;
  }

  button{
    cursor: pointer;
  }

  img{
    max-width: 100%;
  }

  body{
    font-family: 'Inter', sans-serif;
  }
`;
