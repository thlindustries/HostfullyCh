import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    text-decoration: none;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  body {
    background-color: black;
    color: #fff;
    width: 100vw;
    height: 100vh;

    overflow-x: hidden;

    font-family: 'Poppins', sans-serif;
    background-color: ${(props) => props.theme.colors.colorBg};
    color: ${(props) => props.theme.colors.colorWhite};
    line-height: 1.7;
    
    min-width: 660px;
  }

  html{
    scroll-behavior: smooth;
  }

  &::-webkit-scrollbar {
      display: unset;
  }
  &::-webkit-scrollbar {
    width: 4px !important;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.colorPrimary};
    border-radius: 8px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
  h1{
    font-size: 2.5rem;
  }
  strong{
    color: ${(props) => props.theme.colors.colorPrimary};
  }

  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.colorWhite};
  }

  input, textarea{
    &:disabled{
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
  }

  .swiper-pagination-bullet-active{
    background-color: ${(props) => props.theme.colors.colorPrimary} !important;
  }
`;
