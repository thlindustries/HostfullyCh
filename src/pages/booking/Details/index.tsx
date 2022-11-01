import { useQuery } from '@tanstack/react-query';
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
  const { routeId } = useParams() as Params;

  const getRouteDetails = async (): Promise<RouteDetailsDTO> => {
    const response = await api.get(`/booking/${routeId}`);
    return response.data;
  };

  const { data, isLoading = false } = useQuery<RouteDetailsDTO>(
    ['routeDetails'],
    getRouteDetails,
  );

  console.log(data);

  return (
    <Container>
      <HeaderHero>
        <LazyLoadImage
          effect="blur"
          width="100%"
          height="100%"
          loading="lazy"
          placeholderSrc={data?.images[0].path}
          alt={data?.images[0].altText}
          src={data?.images[0].path}
        />
      </HeaderHero>
      <BodyContent>
        <Info>
          <h1>Travel to {data?.name}</h1>
          <p>{data?.description}</p>
          <Comments>
            <h2>Comments</h2>
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
        <ImagesContainer>
          <div className="selected-image-container">
            <LazyLoadImage
              effect="blur"
              width="100%"
              height="100%"
              loading="lazy"
              placeholderSrc={data?.images[0].path}
              alt={data?.images[0].altText}
              src={data?.images[0].path}
            />
          </div>
          <div className="images-list-container">
            {data?.images.map((image) => (
              <div key={image.path} className="img-select-card">
                <LazyLoadImage
                  effect="blur"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  placeholderSrc={image.path}
                  alt={image.altText}
                  src={image.path}
                />
              </div>
            ))}
          </div>
        </ImagesContainer>
      </BodyContent>
    </Container>
  );
};
