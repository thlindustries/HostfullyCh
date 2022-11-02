import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useQuery, QueryCache } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';

import { api } from 'services/api';

import { RouteCard } from 'components/atoms/RouteCard';
import { ShimmerCard } from 'components/atoms/RouteCard/ShimmerCard';

import { SwiperContainer, VerticalScrollContainer } from './styles';

export type PopularRoutesType = {
  name: string;
  id: string;
  thumb: string;
  price: {
    from: number;
    to: number;
  };
};

export const PopularRoutes = (): JSX.Element => {
  const navigate = useNavigate();

  const getPopularRoutes = async (): Promise<PopularRoutesType[]> => {
    const response = await api.get('/popularRoutes');
    return response.data;
  };

  const { data, isLoading = false } = useQuery<PopularRoutesType[]>(
    ['popularRoutes'],
    getPopularRoutes,
    {
      staleTime: 1000 * 60 * 20, // 20 min,
    },
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
                    route={item}
                    onClick={() => navigate(`/booking/${item.id}`)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
          <VerticalScrollContainer>
            {data?.map((item) => (
              <RouteCard
                key={item.id}
                route={item}
                onClick={() => navigate(`/booking/${item.id}`)}
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
