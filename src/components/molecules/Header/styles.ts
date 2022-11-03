import styled, { css } from 'styled-components';

interface ContainerProps {
  hidden: boolean;
  transparentBg: boolean;
}

interface OptionsContainerProps {
  collapsed: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: sticky;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  height: 68px;
  padding: 0.8rem 6rem;
  min-width: 630;
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
    justify-content: space-around;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 35%;

  color: ${({ theme }) =>
    theme.name === 'dark'
      ? theme.colors.primaryTextColor
      : theme.colors.secondaryTextColor};

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

  @media (max-width: 820px) {
    width: 45%;
  }

  @media (max-width: 630px) {
    width: fit-content;
    .body {
      display: none;
    }
  }
`;

export const UserInfoContainer = styled.div`
  color: ${({ theme }) => theme.colors.colorPrimary};
  font-weight: bold;
  width: 50%;

  margin-left: -6rem;

  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const OptionsContainer = styled.div<OptionsContainerProps>`
  display: flex;
  width: ${({ collapsed }) => (collapsed ? 'auto' : '25%')};
  justify-content: space-between;
  margin-left: auto;

  @media (max-width: 240px) {
    display: none;
  }
`;

export const ThemeChangerContainer = styled.div`
  margin-left: 1rem;
`;
