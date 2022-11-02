import styled, { css, keyframes } from 'styled-components';

interface ImgSelectCardProps {
  selected: boolean;
}

const goGray = keyframes`
  0% {
    filter: grayscale(0) blur(0);
  }
  100% {
    filter: grayscale(1) blur(4px);
  }
`;

const appear = keyframes`
  0%{
    opacity: 0.5;
    transform: scale(0) translate(100%, 900%);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  box-shadow: inset 5px 5px 15px -5px rgba(0, 0, 0, 0.4);
  padding: 1rem 0;
  background: ${({ theme }) => theme.colors.primaryBg};
`;

export const HeaderHero = styled.section`
  position: relative;
  display: flex;
  height: 100%;
  width: 50%;

  padding: 0 2rem;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
    border-radius: 4px;

    animation: ${goGray} 2s ease-in-out forwards;
  }

  @media (max-width: 690px) {
    img {
      object-position: center;
    }
  }
`;

export const BookingBtnContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30%;
  border-radius: 4px;

  animation: ${appear} 2s ease-in-out forwards;

  h3 {
    text-align: center;
    width: 60%;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: solid;
    border-width: 2px 2px 0 2px;
    border-color: ${({ theme }) => theme.colors.primaryTextColor};

    margin-bottom: -2px;
    z-index: 2;
    border-radius: 4px 4px 0 0;
  }

  .btns {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const BodyContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50%;
  height: 100%;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  padding: 0 1rem;

  img {
    object-fit: cover;
    object-position: center;

    border-radius: 4px;
  }

  .img-thumb-container {
    border-radius: 4px;
    height: 70%;
  }

  .images-list-container {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    width: fit-content;
    width: 100%;
    height: 180px;
    row-gap: 1rem;
    overflow-x: auto;

    margin-top: 1.5rem;

    padding: 1rem;
  }
`;

export const ImgSelectCard = styled.div<ImgSelectCardProps>`
  border-radius: 8px;
  width: 120px;
  height: 100px;

  & + & {
    margin-left: 1rem;
  }

  transition: opacity 0.2s ease-in-out;

  img {
    border-radius: 6px;
  }

  ${({ selected, theme }) =>
    selected
      ? css`
          opacity: 1;
          border: solid 2px ${theme.colors.colorPrimary};
        `
      : css`
          opacity: 0.4;
        `}

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 40%;
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.primaryTextColor};

  border-radius: 2px;

  .basic-infos {
    width: 50%;
    height: 100%;
    text-align: justify;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: bold;
      text-decoration: underline;
    }

    > p {
      font-size: 0.825rem;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45%;
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;

  overflow-y: auto;

  h1 {
    font-weight: bold;
    text-decoration: underline;

    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .comment {
    margin-bottom: 1rem;

    border: solid 0.5px ${({ theme }) => theme.colors.primaryTextColor};
    padding: 0.5rem;
    border-radius: 2px;

    h3 {
      font-weight: bold;
      font-size: 0.825rem;
    }
    p {
      font-size: 0.725rem;
    }
  }
`;
