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
  left: -1px;
  display: flex;

  width: 40%;
  border-radius: 8px 8px 0 0;
  margin-top: -50px;

  .v-separator {
    background: ${({ theme }) => theme.colors.colorGray300};
    width: 1px;
    height: 100%;
  }
`;

export const Tab = styled.div<TabProps>`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  background: ${({ theme }) => theme.colors.colorWhite};
  color: ${({ theme }) => theme.colors.colorWhite};

  transition: 0.4s;

  border-radius: 8px 0 0 0;

  &:nth-child(3) {
    border-radius: 0 8px 0 0;
  }

  ${({ theme, selected }) =>
    selected
      ? css`
          background: ${theme.colors.colorWhite};
          color: ${theme.colors.colorPrimary};
          border-style: solid;
          border-color: ${({ theme }) => theme.colors.colorPrimary};
          border-width: 1px 1px 0 1px;
        `
      : css`
          background: rgba(255, 255, 255, 0.4);
          filter: blur(0.5px);
        `}

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.colorPrimary};
    color: ${({ theme }) => theme.colors.colorWhite};
    filter: unset;
  }
`;

export const FlightsTab = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 0 0 0px 0;
`;

export const HotelsTab = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 0 0 8px 8px;
`;
