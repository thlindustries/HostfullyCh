import styled, { css } from 'styled-components';

interface ImgSelectCardProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const HeaderHero = styled.section`
  display: flex;
  height: 100%;
  width: 50%;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 690px) {
    img {
      object-position: center;
    }
  }
`;

export const BodyContent = styled.section`
  background: ${({ theme }) => theme.colors.primaryBg};
  box-shadow: inset 5px 5px 15px -5px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;

  padding: 2rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.darkerBg};
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  border-radius: 4px;

  h2 {
    margin-top: auto;
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
  width: 100%;
  height: 50%;
  margin-top: auto;

  overflow-y: auto;

  .comment {
    margin-bottom: 1rem;

    border: solid 0.5px ${({ theme }) => theme.colors.secondaryTextColor};
    padding: 0.5rem;
    border-radius: 4px;

    h3 {
      font-weight: bold;
    }
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  padding: 1rem;

  img {
    object-fit: cover;
    object-position: center;

    border-radius: 4px;
  }

  .selected-image-container {
    border-radius: 4px;
    height: 50%;
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
    border-radius: 8px;
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
