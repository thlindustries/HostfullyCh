import { useState } from 'react';

import { BookingNavigation } from 'components/molecules/BookingNavigation';
import { PopularRoutes } from 'components/molecules/PopularRoutes';

import {
  Container,
  HeaderHero,
  BodyContent,
  PopularRoutesContainer,
  BookingNavigationContainer,
} from './styles';

export const Booking = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <Container>
      <HeaderHero />
      <BookingNavigationContainer>
        <BookingNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </BookingNavigationContainer>
      <BodyContent>
        <PopularRoutesContainer>
          <PopularRoutes />
        </PopularRoutesContainer>
      </BodyContent>
    </Container>
  );
};
