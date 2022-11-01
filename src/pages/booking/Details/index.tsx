import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Modal } from 'components/atoms/modal';
import { Input } from 'components/atoms/Input';

import { api } from 'services/api';

import {
  Container,
  HeaderHero,
  BookingBtnContainer,
  Button,
  BodyContent,
  Info,
  Comments,
  ImagesContainer,
  ImgSelectCard,
  TestModal,
} from './styles';

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

type RouteAvailabilityDTO = {
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

  const { routeId } = useParams() as Params;
  const navigate = useNavigate();

  const getRouteDetails = async (): Promise<RouteDetailsDTO> => {
    const response = await api.get<RouteDetailsDTO>(`/booking/${routeId}`);
    return response.data;
  };

  const getRouteAvailability = async (): Promise<RouteAvailabilityDTO> => {
    const response = await api.get<RouteAvailabilityDTO>(
      `/tripsAvailability/${routeId}`,
    );
    return response.data;
  };

  const { data: routeDetails } = useQuery<RouteDetailsDTO>(
    ['routeDetails'],
    getRouteDetails,
  );
  const { data: routeAvailability } = useQuery<RouteAvailabilityDTO>(
    ['routeAvailability'],
    getRouteAvailability,
  );

  const createBooking = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <Container>
      <Modal isOpen={showModal} center>
        <TestModal>
          <div className="close-btn">
            <button onClick={() => setShowModal(false)}>X</button>
          </div>
          <form onSubmit={createBooking}>
            <div className="inputs-container">
              <Input label="name" />
              <Input label="last name" />
              <Input label="age" />
            </div>
            <span>Available Dates</span>
            <div className="booking-dates">
              {routeAvailability?.availablePeriods.map(
                (availability, index) => (
                  <div
                    className={`book-date ${
                      availability.available ? '' : 'unavailable'
                    }`}
                    key={index}
                  >
                    <p>
                      {new Date(availability?.from).toLocaleString()}{' '}
                      <AiOutlineArrowRight size={12} />{' '}
                      {new Date(availability?.to).toLocaleString()}
                    </p>
                  </div>
                ),
              )}
            </div>
            <Button
              primary
              type="submit"
              onClick={() => setShowModal(true)}
              disabled={routeAvailability?.availablePeriods.every(
                (item) => !item.available,
              )}
            >
              Book trip
            </Button>
          </form>
        </TestModal>
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
            <Button primary type="button" onClick={() => setShowModal(true)}>
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
