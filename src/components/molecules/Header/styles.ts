import styled, { css } from 'styled-components';

interface ContainerProps {
  hidden: boolean;
  transparentBg: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: sticky;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  height: 68px;
  padding: 0.8rem 6rem;
  min-width: 400px;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.3);

  top: 0;
  transition: top 0.5s ease-in-out, background-color 0.5s;

  background-color: ${({ transparentBg, theme }) =>
    transparentBg ? 'transparent' : theme.colors.scrollingHeaderColor};

  ${({ hidden }) =>
    hidden
      ? css`
          top: -100%;
        `
      : null}

  @media(max-width: 500px) {
    padding: 0.8rem 2rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 20%;

  color: ${({ theme }) => theme.colors.colorWhite};

  .body {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    font-size: 0.825rem;

    p {
      font-weight: bolder;
    }
  }

  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-between;
  margin-left: auto;
`;

export const ThemeChangerContainer = styled.div``;
