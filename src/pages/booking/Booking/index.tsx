import { useMemo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useTheme } from 'hooks/theme';
import { BookedTrip, useTrip } from 'hooks/trip';

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
import { useQuery } from '@tanstack/react-query';

export const Booking = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('flights');

  const { selectedTheme } = useTheme();
  const { getBookedTrips } = useTrip();

  const bgImage = useMemo(
    () => (selectedTheme.name === 'dark' ? darkHomeBanner : homeBanner),
    [selectedTheme],
  );

  const { data: bookedTrips } = useQuery<BookedTrip[]>(
    ['bookedTrips'],
    getBookedTrips,
    {
      refetchOnMount: true,
    },
  );

  return (
    <Container>
      <HeaderHero>
        <LazyLoadImage
          effect="blur"
          width="100%"
          height="100%"
          loading="lazy"
          placeholderSrc={bgImage}
          alt="background-image"
          src={bgImage}
        />
      </HeaderHero>
      <BookingNavigationContainer>
        <BookingNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          items={bookedTrips as BookedTrip[]}
        />
      </BookingNavigationContainer>
      <BodyContent>
        <PopularRoutesContainer>
          <PopularRoutes />
        </PopularRoutesContainer>
      </BodyContent>
    </Container>
  );
};
