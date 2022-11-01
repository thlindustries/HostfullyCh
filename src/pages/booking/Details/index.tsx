import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';

import { api } from 'services/api';

import {
  Container,
  HeaderHero,
  BodyContent,
  Info,
  Comments,
  ImagesContainer,
  ImgSelectCard,
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

export const BookingDetails = (): JSX.Element => {
  const [selectedImg, setSelectedImg] = useState(0);

  const { routeId } = useParams() as Params;

  const getRouteDetails = async (): Promise<RouteDetailsDTO> => {
    const response = await api.get(`/booking/${routeId}`);
    return response.data;
  };

  const { data, isLoading = false } = useQuery<RouteDetailsDTO>(
    ['routeDetails'],
    getRouteDetails,
  );

  return (
    <Container>
      <HeaderHero>
        <LazyLoadImage
          effect="blur"
          width="100%"
          placeholderSrc={data?.images[0].path}
          alt={data?.images[0].altText}
          src={data?.images[0].path}
        />
      </HeaderHero>
      <BodyContent>
        <ImagesContainer>
          <div className="selected-image-container">
            <LazyLoadImage
              effect="blur"
              width="100%"
              height="100%"
              loading="lazy"
              placeholderSrc={data?.images[selectedImg].path}
              alt={data?.images[selectedImg].altText}
              src={data?.images[selectedImg].path}
            />
          </div>
          <div className="images-list-container">
            {data?.images.map((image, index) => (
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
          <h1>Travel to {data?.name}</h1>
          <p>{data?.description}</p>
          <h2>Comments</h2>
          <Comments>
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="comment" key={index}>
                <h3>John Doe</h3>
                <p>
                  Such an amazing place to travel with the kids, I trully
                  recomend you
                </p>
              </div>
            ))}
          </Comments>
        </Info>
      </BodyContent>
    </Container>
  );
};
