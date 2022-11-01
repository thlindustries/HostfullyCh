import { useMemo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useTheme } from 'hooks/theme';

import { BookingNavigation } from 'components/molecules/BookingNavigation';
import { PopularRoutes } from 'components/molecules/PopularRoutes';

import homeBanner from 'assets/images/skyPlane.jpg';
import darkHomeBanner from 'assets/images/skyNight.webp';

import {
  Container,
  HeaderHero,
  BodyContent,
  PopularRoutesContainer,
  BookingNavigationContainer,
} from './styles';

export const Booking = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('flights');

  const { selectedTheme } = useTheme();

  const bgImage = useMemo(
    () => (selectedTheme.name === 'dark' ? darkHomeBanner : homeBanner),
    [selectedTheme],
  );

  return (
    <Container>
      <HeaderHero>
        <LazyLoadImage alt="background-image" src={bgImage} />
      </HeaderHero>
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
