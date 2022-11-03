import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 25%;

  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 8px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);

  .m-title {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;

    background-color: ${({ theme }) => theme.colors.primaryBg};
    color: ${({ theme }) => theme.colors.primaryTextColor};
    padding: 0.6rem;
    text-align: center;

    border: solid 1px ${({ theme }) => theme.colors.primaryTextColor};
    border-radius: 8px;
  }

  .btns-container {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button {
      width: 40%;
    }
  }
`;
