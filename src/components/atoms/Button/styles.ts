import styled, { css } from 'styled-components';

interface ButtonProps {
  buttonType?: string;
}

export const Container = styled.button<ButtonProps>`
  width: 80%;

  border: none;

  height: 60px;
  padding: 1rem;

  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, buttonType }) =>
    buttonType === 'primary'
      ? css`
          border: solid 2px ${theme.colors.primaryTextColor};
          background-color: ${theme.colors.colorPrimary};
        `
      : null}

  ${({ theme, buttonType }) =>
    buttonType === 'secondary'
      ? css`
          border: solid 1px ${theme.colors.colorPrimary};
          background-color: ${theme.colors.primaryTextColor};
        `
      : null}

  transition: opacity .2s;

  &:disabled {
    pointer-events: none;
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
