import { Outlet } from 'react-router-dom';

import { Header } from 'components/molecules/Header';

import { Container, BodyContainer } from './styles';

export const Layout = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </Container>
  );
};
