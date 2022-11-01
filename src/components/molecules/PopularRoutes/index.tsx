import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useQuery } from '@tanstack/react-query';

import 'swiper/css';
import 'swiper/css/pagination';

import { api } from 'services/api';

import { RouteCard } from 'components/atoms/RouteCard';
import { ShimmerCard } from 'components/atoms/RouteCard/ShimmerCard';

import { SwiperContainer, VerticalScrollContainer } from './styles';

type PupularRoutes = {
  name: string;
  id: number;
  thumb: string;
  price: {
    from: number;
    to: number;
  };
};

export const PopularRoutes = (): JSX.Element => {
  const getPopularRoutes = async (): Promise<PupularRoutes[]> => {
    const response = await api.get('/popularRoutes');
    return response.data;
  };

  const { data, isLoading } = useQuery<PupularRoutes[]>(
    ['popularRoutes'],
    getPopularRoutes,
  );

  return (
    <>
      {!isLoading ? (
        <>
          <SwiperContainer>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {data?.map((item) => (
                <SwiperSlide key={item.id}>
                  <RouteCard
                    name={item.name}
                    thumb={item.thumb}
                    price={item.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
          <VerticalScrollContainer>
            {data?.map((item) => (
              <RouteCard
                name={item.name}
                thumb={item.thumb}
                price={item.price}
                key={item.id}
              />
            ))}
          </VerticalScrollContainer>
        </>
      ) : (
        <VerticalScrollContainer loading={isLoading}>
          {Array.from({ length: 5 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </VerticalScrollContainer>
      )}
    </>
  );
};
