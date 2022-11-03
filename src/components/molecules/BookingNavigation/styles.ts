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
  flex-direction: column;

  align-items: center;
  padding: 2rem 1rem;

  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  border-radius: 0 8px 8px 8px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
`;

export const TabHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: ${({ theme }) => theme.colors.primaryTextColor};

  p {
    border: solid 1px ${({ theme }) => theme.colors.primaryTextColor};
    padding: 0.25rem;
  }
`;

export const TabRows = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const TripRow = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 0.8rem;

  p {
    padding: 0.5rem;

    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.colorGray250};
      color: ${({ theme }) =>
        theme.name === 'dark'
          ? theme.colors.secondaryTextColor
          : theme.colors.colorGray350};
    }

    &:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.colorGray300};
      color: ${({ theme }) => theme.colors.secondaryTextColor};
    }
  }
`;
