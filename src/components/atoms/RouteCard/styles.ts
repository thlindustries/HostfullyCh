import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 90%;
  width: 80%;
  border-radius: 4px;
  margin: 1rem;

  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.4);

  background-color: ${({ theme }) => theme.colors.primaryBg};
  color: black;

  .thumb {
    height: 60%;
    border-radius: 4px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    height: 40%;

    color: ${({ theme }) => theme.colors.primaryTextColor};

    small {
      font-weight: bold;
      margin-right: 0.5rem;
    }

    .price-container {
      display: flex;
      align-items: center;

      p {
        font-size: 1rem;
        padding: 0.25rem;
        background-color: ${({ theme }) => theme.colors.colorPrimary};
        color: ${({ theme }) => theme.colors.secondaryTextColor};
        font-weight: bold;
        border-radius: 4px;
        margin-left: 1rem;
      }
    }

    .price {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          margin-left: 0.15rem;
        }
      }

      *.old-price {
        text-decoration: line-through;
        font-size: 0.625rem;
      }
    }
  }

  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);

    box-shadow: 25px 10px 15px -5px rgba(0, 0, 0, 0.4);
  }

  @media (max-height: 680px) {
    height: 80%;
    width: 60%;
    border-radius: 4px;
    margin: 0.5rem;
    overflow-y: auto;

    .info {
      padding: 0.5rem;
    }
    p {
      font-size: 0.725rem !important;
    }
  }

  @media (max-width: 1300px) {
    width: 220px;
    height: 240px;

    font-size: 0.8rem;

    .info {
      padding: 0.2rem;
    }
    p:not(.old-price) {
      font-size: 0.8rem;
      padding: 0.1rem;
      margin-left: 0.2rem;
    }

    &:hover {
      box-shadow: 5px 10px 15px -5px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 950px) {
    width: 240px;
    height: 280px;
  }

  @media (max-width: 690px) {
    width: 440px;
    height: 280px;

    margin-bottom: 1rem;

    .info {
      justify-content: center;
      align-items: flex-start;
      padding: 0 2rem;
    }
  }
`;
