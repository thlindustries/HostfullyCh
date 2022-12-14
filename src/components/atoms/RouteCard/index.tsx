import { AiOutlineArrowRight } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { converNumberToBRL } from 'utils/functions';

import { Container } from './styles';

type RouteType = {
  name: string;
  id: string;
  thumb: string;
  price: {
    from: number;
    to: number;
  };
};

type RouteCardProps = {
  route: RouteType;
  onClick: () => void;
};

export const RouteCard = ({ route, onClick }: RouteCardProps): JSX.Element => {
  const { name, price, thumb } = route;

  return (
    <Container onClick={onClick}>
      <div className="thumb">
        <LazyLoadImage
          alt={name}
          src={thumb}
          effect="blur"
          width="100%"
          height="100%"
          loading="lazy"
          placeholderSrc={thumb}
        />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <div className="price-container">
          <div className="price">
            <small>From</small>
            <span className="old-price">
              {converNumberToBRL(price.from)} <AiOutlineArrowRight size={12} />
            </span>
          </div>
          <p>{converNumberToBRL(price.to)}</p>
        </div>
      </div>
    </Container>
  );
};
