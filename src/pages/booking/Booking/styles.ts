import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: -68px;
`;

export const HeaderHero = styled.section`
  height: 45%;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: ${({ theme }) =>
      theme.name === 'dark' ? 'center -185px' : 'center'};
  }

  @media (max-width: 900px) {
    img {
      object-position: center;
    }
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

  opacity: 1;

  @media (max-height: 680px) {
    margin-top: -140px;
  }

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
  height: calc(55% + 68px);
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

  @media (max-height: 680px) {
    overflow-y: auto;
    margin-top: 6rem;
  }
`;
