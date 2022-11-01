import styled, { css } from 'styled-components';

interface StyledMenuProps {
  open: boolean;
}

interface BurgerProps {
  color: string;
}

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
`;

export const StyledMenu = styled.nav<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondaryBg};
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(200%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;

  min-width: 630px;

  a {
    display: flex;
    align-items: center;
    padding: 2rem 0;

    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryTextColor};
    text-decoration: none;

    &,
    svg {
      transition: color 0.3s linear;
    }

    svg {
      margin-right: 1rem;
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      &,
      svg {
        color: ${({ theme }) => theme.colors.colorPrimary};
      }
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    min-width: unset;
    a {
      font-size: 1rem;
      letter-spacing: unset;
    }
  }
`;

export const StyledBurger = styled.button<StyledMenuProps & BurgerProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 10;
  align-items: center;

  width: 2.5rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  transition: right 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    left 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open, theme }) =>
      open ? theme.colors.colorPrimary : theme.colors.colorWhite};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  ${({ open }) =>
    open
      ? css`
          right: 26rem;
        `
      : css`
          right: 10.3rem;
        `}

  @media (max-width: 630px) {
    ${({ open }) =>
      open
        ? css`
            left: 2rem;
          `
        : css`
            left: unset;
            right: unset;
          `}
  }
`;
