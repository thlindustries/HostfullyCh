import styled from 'styled-components';

interface RouteCardProps {
  bgImage?: string;
}

export const Container = styled.div<RouteCardProps>`
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

    color: ${({ theme }) => theme.colors.colorBlack};

    small {
      font-weight: bold;
      margin-right: 0.5rem;
    }

    .price {
      display: flex;
      align-items: center;

      *.old-price {
        text-decoration: line-through;
        font-size: 0.625rem;
      }

      p:not(.old-price) {
        font-size: 1rem;
        padding: 0.25rem;
        background-color: ${({ theme }) => theme.colors.colorPrimary};
        color: ${({ theme }) => theme.colors.colorWhite};
        font-weight: bold;
        border-radius: 4px;
        margin-left: 1rem;
      }
    }
  }

  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);

    box-shadow: 25px 10px 15px -5px rgba(0, 0, 0, 0.4);
  }
`;
