import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { converNumberToBRL } from 'utils/functions';

import { Container } from './styles';

type RouteCardProps = {
  name: string;
  thumb: string;
  price: {
    from: number;
    to: number;
  };
};

export const RouteCard = ({
  name,
  price,
  thumb,
}: RouteCardProps): JSX.Element => {
  return (
    <Container>
      <div className="thumb">
        <LazyLoadImage alt={name} src={thumb} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <small>From</small>
        <div className="price">
          <p className="old-price">{converNumberToBRL(price.from)}</p>
          <AiOutlineArrowRight size={12} />
          <p>{converNumberToBRL(price.to)}</p>
        </div>
      </div>
    </Container>
  );
};
