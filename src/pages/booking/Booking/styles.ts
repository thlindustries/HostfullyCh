import styled, { css } from 'styled-components';
import homeBanner from 'assets/images/skyPlane.jpg';

interface TabProps {
  selected: boolean;
}

interface RouteCardProps {
  bgImage?: string;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  margin-top: -68px;
`;

export const HeaderHero = styled.section`
  background-image: url(${homeBanner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  height: 45%;
`;

export const BookingNavigation = styled.div`
  position: absolute;
  display: flex;
  background-color: white;

  width: 52%;
  height: 220px;
  margin-top: -160px;

  left: 50%;
  transform: translateX(-50%);

  border-radius: 0 8px 8px 8px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);

  border: solid 1px ${({ theme }) => theme.colors.colorPrimary};
`;

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

export const BodyContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  display: flex;
  height: 55%;
  background-color: ${({ theme }) => theme.colors.colorGray200};

  box-shadow: inset 5px 5px 15px -5px rgba(0, 0, 0, 0.4);
`;

export const PopularRoutes = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  justify-content: space-evenly;
  height: 320px;

  margin-top: 4rem;
`;

export const RouteCard = styled.div<RouteCardProps>`
  display: flex;
  flex-direction: column;

  height: 90%;
  width: 80%;
  border-radius: 4px;
  margin: 1rem;

  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.4);

  background-color: ${({ theme }) => theme.colors.colorWhite};
  color: black;

  .thumb {
    height: 60%;
    border-radius: 4px;

    background-image: url(${({ bgImage }) => bgImage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    height: 40%;

    small {
      margin-right: 0.5rem;
      font-weight: bold;
    }

    .price {
      display: flex;
      align-items: center;

      *.old-price {
        text-decoration: line-through;
        font-size: 0.625rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
