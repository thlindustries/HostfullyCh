import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

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
    <Container bgImage={thumb}>
      <div className="thumb" />
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
