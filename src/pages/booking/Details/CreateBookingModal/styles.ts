import styled, { css } from 'styled-components';

interface AvailabilityRowProps {
  state: string;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 30%;
  height: 60%;
  padding: 0.25rem;

  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.darkerBg};
  color: ${({ theme }) => theme.colors.primaryTextColor};

  box-shadow: 0 10px 15px 5px rgba(0, 0, 0, 0.4);
  z-index: 2;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: auto;

    background-color: ${({ theme }) => theme.colors.primaryBg};
    width: 100%;
    height: 100%;
    padding: 1rem;

    border-radius: 4px;

    input {
      width: 100%;
    }

    span {
      font-weight: bold;
    }
  }

  @media (max-width: 780px) {
    width: 80%;
    height: 80%;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;

  &::before {
    position: absolute;
    left: -3px;
    top: -3px;

    content: '';
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.colorPrimary};

    z-index: -1;
  }

  button {
    position: relative;
    align-items: center;
    width: 40px;
    height: 40px;
    border: none;
    background: ${({ theme }) => theme.colors.primaryBg};

    border-radius: 50%;

    color: ${({ theme }) => theme.colors.primaryTextColor};

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.colorPrimary};
    }
  }
`;

export const BookingDates = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: auto;
  width: 100%;
`;

export const AvailabilityRow = styled.div<AvailabilityRowProps>`
  font-size: 0.8rem;
  padding: 0.5rem 1rem;

  color: ${({ theme }) => theme.colors.primaryTextColor};
  border: solid 3px transparent;

  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateX(10px);
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.colorPrimary};
  }

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.darkerBg};
    color: ${({ theme }) =>
      theme.name === 'dark'
        ? theme.colors.primaryTextColor
        : theme.colors.secondaryTextColor};
  }

  ${({ state }) =>
    state === 'unavailable'
      ? css`
          opacity: 0.5;
          text-decoration: line-through;
          pointer-events: none;
          cursor: not-allowed;
        `
      : null}

  ${({ state, theme }) =>
    state === 'selected'
      ? css`
          background-color: ${theme.colors.brazilGreen} !important;
          color: ${theme.colors.secondaryTextColor};
          border: solid 3px ${theme.colors.primaryTextColor};
        `
      : null}
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 100%;
  margin-top: 1rem;

  input {
    margin-bottom: 1rem;
    width: 100%;
  }
`;
