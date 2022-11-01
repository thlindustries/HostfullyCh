import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const HeaderHero = styled.section`
  height: 45%;

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
  background: black;
  display: flex;

  width: 100%;
  height: 80%;

  padding: 2rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  border: solid 1px red;
  padding: 1rem;
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
  h2 {
    margin-bottom: 1rem;
  }

  .comment {
    margin-bottom: 1rem;

    border: solid 1px gray;
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
  width: 50%;
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
    max-width: 100%;
    height: 20%;
    row-gap: 1rem;
    overflow-x: auto;

    margin-top: 1.5rem;

    padding: 1rem;

    .img-select-card {
      border: solid 1px red;
      border-radius: 8px;
      width: 120px;
      height: 100px;

      & + .img-select-card {
        margin-left: 1rem;
      }

      transition: opacity 0.2s ease-in-out;
      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
  }
`;
