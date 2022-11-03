import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';

import { Button } from 'components/atoms/Button';
import { Modal } from 'components/atoms/Modal';

import { CreateBookingModal } from './CreateBookingModal';

import { api } from 'services/api';

import {
  Container,
  HeaderHero,
  BookingBtnContainer,
  BodyContent,
  Info,
  Comments,
  ImagesContainer,
  ImgSelectCard,
} from './styles';
import { toast } from 'react-toastify';
import { useTrip } from 'hooks/trip';

type Params = {
  routeId: string;
};

type RouteDetailsDTO = {
  name: string;
  description: string;
  id: string;
  images: Array<{
    altText: string;
    path: string;
  }>;
  price: {
    from: number;
    to: number;
  };
};

export type RouteAvailabilityDTO = {
  tripId: string;
  availablePeriods: Array<{
    id: string;
    from: string;
    to: string;
    available: boolean;
  }>;
};

export const BookingDetails = (): JSX.Element => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedTripDate, setSelectedTripDate] = useState('');

  const { routeId } = useParams() as Params;

  const { getRouteAvailability, getRouteDetails, createBooking, setUserName } =
    useTrip();

  const { data: routeDetails } = useQuery<RouteDetailsDTO>(
    [routeId],
    async () => await getRouteDetails(routeId),
    {
      staleTime: 1000 * 60 * 20, // 20 min,
    },
  );

  const { data: routeAvailability } = useQuery<RouteAvailabilityDTO>(
    [`routeAvailability-${routeId}`],
    async () => await getRouteAvailability(routeId),
    {
      staleTime: 1000 * 3, // 3 segs (needs to be updated as soon as possible to block trips already booked)
    },
  );

  const handleCreateBooking = async (data: Record<any, any>): Promise<void> => {
    if (!routeAvailability) {
      toast.error('Oops, something went wronk, please try again!');
      return;
    }
    const response = await createBooking(
      data,
      routeId,
      selectedTripDate,
      routeAvailability,
    );

    if (response.status === 200 || response.status === 201) {
      toast.success('Ohh Yeah, your trip is booked, hope you like :D');
    } else {
      toast.error('Oops, something went wrong, try again :(');
    }
    setUserName(data.name);
    setShowModal(false);
    setSelectedTripDate('');
  };

  const handleSelectTripDate = (tripId: string): void => {
    const selectedTrip = routeAvailability?.availablePeriods.find(
      (trip) => trip.id === tripId,
    );
    if (!selectedTrip) return;
    const isTripAvailable = selectedTrip.available;

    if (!isTripAvailable) {
      toast.warn('This trip is not available :(');
      return;
    }

    setSelectedTripDate((prevTripId) => (prevTripId === tripId ? '' : tripId));
  };

  return (
    <Container>
      <Modal isOpen={showModal} center>
        {routeAvailability ? (
          <CreateBookingModal
            selectedTripDate={selectedTripDate}
            routeAvailability={routeAvailability}
            onSelectetTrip={handleSelectTripDate}
            onSumbit={handleCreateBooking}
            toggleModal={(cbState) =>
              setShowModal((prevState) => cbState ?? !prevState)
            }
          />
        ) : null}
      </Modal>
      <HeaderHero>
        <LazyLoadImage
          effect="blur"
          width="100%"
          placeholderSrc={routeDetails?.images[0].path}
          alt={routeDetails?.images[0].altText}
          src={routeDetails?.images[0].path}
        />
        <BookingBtnContainer>
          <h3>Hello there</h3>
          <div className="btns">
            <Button
              buttonType="primary"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Book trip
            </Button>
          </div>
        </BookingBtnContainer>
      </HeaderHero>
      <BodyContent>
        <ImagesContainer>
          <div className="img-thumb-container">
            <LazyLoadImage
              effect="blur"
              width="100%"
              height="100%"
              loading="lazy"
              placeholderSrc={routeDetails?.images[selectedImg].path}
              alt={routeDetails?.images[selectedImg].altText}
              src={routeDetails?.images[selectedImg].path}
            />
          </div>
          <div className="images-list-container">
            {routeDetails?.images.map((image, index) => (
              <ImgSelectCard
                key={image.path}
                selected={selectedImg === index}
                onClick={() => setSelectedImg(index)}
              >
                <LazyLoadImage
                  effect="blur"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  placeholderSrc={image.path}
                  alt={image.altText}
                  src={image.path}
                />
              </ImgSelectCard>
            ))}
          </div>
        </ImagesContainer>
        <Info>
          <div className="basic-infos">
            <h1>Travel to {routeDetails?.name}</h1>
            <p>{routeDetails?.description}</p>
          </div>
          <div className="v-separator" />
          <Comments>
            <h1>Comments</h1>

            {Array.from({ length: 5 }).map((_, index) => (
              <div className="comment" key={index}>
                <h3>John Doe</h3>
                <p>
                  Such an amazing place to travel with the kids, I trully
                  recomend you to visit it !
                </p>
              </div>
            ))}
          </Comments>
        </Info>
      </BodyContent>
    </Container>
  );
};
