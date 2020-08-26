import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.jpg';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #333 url(${background}) no-repeat center;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
  }
  
  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;