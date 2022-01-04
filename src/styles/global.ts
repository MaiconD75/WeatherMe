import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font: 400 16px Poppins, sans-serif;
    height: 100vh;
    width: 100vw;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    height: 12px;
    width: 8px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  }

  ::-webkit-scrollbar-corner{
    background-color: transparent;
  }

  ::-webkit-scrollbar-track{
    border-radius: 4px;
    background: #55555599;
  }

  ::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
    border: 1px solid #999;
  }
`;
