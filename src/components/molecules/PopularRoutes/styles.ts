import styled from 'styled-components';

export const SwiperContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const VerticalScrollContainer = styled.div`
  display: none;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;

  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100vh;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 690px) {
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: center;
  }
`;
