import styled from 'styled-components';
import homeBanner from 'assets/images/skyPlane.jpg';
import darkHomeBanner from 'assets/images/skyNight.webp';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  margin-top: -68px;
`;

export const HeaderHero = styled.section`
  background-image: ${({ theme }) =>
    theme.name === 'dark' ? `url(${darkHomeBanner})` : `url(${homeBanner})`};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${({ theme }) =>
    theme.name === 'dark' ? 'center -75px' : 'center'};

  height: 45%;

  @media (max-width: 690px) {
    background-position: center;
  }
`;

export const BookingNavigationContainer = styled.div`
  position: absolute;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primaryBg};

  width: 82%;
  height: 220px;
  margin-top: -160px;

  left: 50%;
  transform: translateX(-50%);

  border-radius: 0 8px 8px 8px;

  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);

  opacity: 0.9;

  @media (max-width: 630px) {
    border: none;
  }
`;

export const BodyContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  display: flex;
  height: 55%;
  background-color: ${({ theme }) => theme.colors.secondaryBg};

  box-shadow: inset 5px 5px 15px -5px rgba(0, 0, 0, 0.4);
`;

export const PopularRoutesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  justify-content: space-evenly;
  height: 75%;

  margin-top: 4rem;
`;
