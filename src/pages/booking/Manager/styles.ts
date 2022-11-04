import styled, { css, keyframes } from 'styled-components';

import bgImage from 'assets/images/manager-bg.webp';

interface TripsRowProps {
  isLoading?: boolean;
}

const alertAnimation = keyframes`
  0% {
    background-color: #e45657;
  }
  50% {
    background-color: #fff;
  }
  100%{
    background-color: #e45657;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% + 68px);

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${bgImage});

  margin-top: -68px;
`;

export const ManagerTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 65%;

  padding: 1rem;
  border-radius: 4px;
  border: solid 6px ${({ theme }) => theme.colors.primaryTextColor};

  background-color: ${({ theme }) => theme.colors.primaryBg};
  box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.4);

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const TripsTableContainer = styled.div<TripsRowProps>`
  width: 100%;
  height: 100%;

  ${({ isLoading }) =>
    isLoading
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(4px) grayscale(0.5);
        `
      : null}
`;

export const TripsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-top: 1rem;
  /* width: 100%;
  height: 100%; */
  border-radius: 4px;
  overflow-y: auto;

  background-color: ${({ theme }) => theme.colors.blueNight};

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: solid 1px ${({ theme }) => theme.colors.primaryTextColor};
    color: ${({ theme }) => theme.colors.colorWhite};
    padding: 0.25rem;
    font-size: 0.825rem;

    min-height: 40px;
  }

  input {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 0.5rem;
    margin: 0;

    background-color: ${({ theme }) => theme.colors.colorPrimary};
    color: ${({ theme }) => theme.colors.primaryTextColor};

    animation: ${alertAnimation} 1s ease-in forwards;
  }

  button {
    border: none;
    background-color: transparent;
    border: solid 1px ${({ theme }) => theme.colors.primaryTextColor};
  }

  .id {
    color: ${({ theme }) => theme.colors.colorPrimary};
    font-weight: bold;
  }

  .edit,
  .delete {
    transition: transform 0.2s, color 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.15);
    }
  }
  .edit {
    color: ${({ theme }) => theme.colors.brazilGreen};
  }
  .delete {
    color: ${({ theme }) => theme.colors.colorPrimary};
  }

  @media (max-width: 760px) {
    padding: 0.5rem;
    p {
      font-size: 0.625rem;
    }
  }
`;
