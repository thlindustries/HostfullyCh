import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import dubaiImg from 'assets/images/dubai.webp';
import taquaralImg from 'assets/images/taquaral.webp';
import nyImg from 'assets/images/newYork.webp';
import caribeImg from 'assets/images/homeBanner.webp';
import californiaImg from 'assets/images/california.webp';

import { RouteCard } from 'components/atoms/RouteCard';

import { SwiperContainer, VerticalScrollContainer } from './styles';

const Routes = [
  {
    name: 'Dubai',
    id: 1111,
    thumb: dubaiImg,
    price: {
      from: 100,
      to: 50,
    },
  },
  {
    name: 'Campinas - SP',
    id: 2222,
    thumb: taquaralImg,
    price: {
      from: 200,
      to: 150,
    },
  },
  {
    name: 'New York',
    id: 3333,
    thumb: nyImg,
    price: {
      from: 150,
      to: 100,
    },
  },
  {
    name: 'Caribe',
    id: 4444,
    thumb: caribeImg,
    price: {
      from: 300,
      to: 150,
    },
  },
  {
    name: 'California',
    id: 5555,
    thumb: 'https://drive.google.com/file/d/1g5QxydbEONxmX2wwqPFMY9wp3qsQ6Fq8',
    price: {
      from: 400,
      to: 110,
    },
  },
];

export const PopularRoutes = (): JSX.Element => {
  return (
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
          {Routes.map((item) => (
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
        {Routes.map((item) => (
          <RouteCard
            name={item.name}
            thumb={item.thumb}
            price={item.price}
            key={item.id}
          />
        ))}
      </VerticalScrollContainer>
    </>
  );
};
