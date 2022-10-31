import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-around;
  align-items: center;
  margin-right: 2rem;

  a {
    transition: opacity 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      opacity: 0.4;
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
