import styled, { css } from 'styled-components';

interface ContainerProps {
  containerWidth: string;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  ${({ containerWidth }) =>
    containerWidth
      ? css`
          width: ${containerWidth};
        `
      : null};

  label {
    position: absolute;
    left: 16px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    pointer-events: none;
    transform: translateY(1rem);
    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledInput = styled.input`
  border: solid 1.5px ${({ theme }) => theme.colors.primaryTextColor};
  border-radius: 4px;
  background: none;
  padding: 1rem;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.primaryTextColor};
  transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border: 1.5px solid ${({ theme }) => theme.colors.colorPrimary};

    ~ label {
      transform: translateY(-50%) scale(0.8);
      padding: 0 0.2em;
      color: ${({ theme }) => theme.colors.colorPrimary};
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.primaryBg};
    }
  }

  &:not(:placeholder-shown) ~ label {
    transform: translateY(-50%) scale(0.8);
    padding: 0 0.2em;
    background-color: ${({ theme }) => theme.colors.primaryBg};
  }
`;
