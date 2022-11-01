import styled, { css } from 'styled-components';

interface TabProps {
  selected: boolean;
}

export const TabsContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

export const Tabs = styled.div`
  position: absolute;
  top: 0;
  display: flex;

  width: 40%;
  border-radius: 8px 8px 0 0;

  margin-top: -50px;

  @media (max-width: 630px) {
    margin-top: -36px;
    left: unset;
  }
`;

export const Tab = styled.div<TabProps>`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.primaryTextColor};

  transition: 0.4s;

  border-radius: 8px 8px 0 0;

  ${({ theme, selected }) =>
    selected
      ? css`
          background-color: ${({ theme }) =>
            theme.name === 'dark'
              ? theme.colors.secondaryBg
              : theme.colors.primaryBg};

          color: ${theme.colors.colorPrimary};
        `
      : css`
          background: rgba(255, 255, 255, 0.4);
          filter: blur(0.5px);
        `}

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.colorPrimary};
    color: ${({ theme }) => theme.colors.primaryTextColor};
    filter: unset;
  }

  svg {
    margin-right: 1rem;
  }

  @media (max-width: 630px) {
    font-size: 0.8rem;
    height: 36px;
    border: none;
  }
`;

export const TabContent = styled.div`
  display: flex;

  align-items: center;
  padding: 1rem;

  width: 100%;
  height: 100%;

  border-radius: 0 8px 8px 8px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
`;
