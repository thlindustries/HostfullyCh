import styled, { css } from 'styled-components';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 50px;
  height: 26px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.colorWhite};
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;

  .checkbox {
    display: none;
  }

  box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.4);

  transition: background-color 0.3s ease-in-out;

  ${({ active, theme }) =>
    active
      ? css`
          background-color: ${theme.colors.blueNight};
        `
      : css`
          background-color: ${theme.colors.colorWhite};
        `}
`;

export const BtnCircle = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  width: 20px;
  height: 20px;

  transition: transform 0.3s ease-in, background-color 0.2s ease-in-out;

  ${({ active }) =>
    active
      ? css`
          background-color: ${({ theme }) => theme.colors.colorGray300};
          transform: translateX(20px) rotate(180deg);
          svg {
            color: ${({ theme }) => theme.colors.colorPrimary};
          }
        `
      : css`
          background-color: ${({ theme }) => theme.colors.colorPrimary};
          transform: translateX(0px);
        `}
`;
