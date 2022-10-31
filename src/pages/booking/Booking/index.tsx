import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { AiOutlineArrowRight } from 'react-icons/ai';

import 'swiper/css';
import 'swiper/css/pagination';

import dubaiImg from 'assets/images/dubai.webp';
import taquaralImg from 'assets/images/taquaral.webp';
import nyImg from 'assets/images/newYork.webp';
import caribeImg from 'assets/images/homeBanner.webp';
import californiaImg from 'assets/images/california.webp';

import {
  Container,
  HeaderHero,
  BookingNavigation,
  TabsContainer,
  Tabs,
  Tab,
  FlightsTab,
  HotelsTab,
  BodyContent,
  PopularRoutes,
  RouteCard,
} from './styles';
import { converNumberToBRL } from 'utils/functions';

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
    thumb: californiaImg,
    price: {
      from: 400,
      to: 110,
    },
  },
];

export const Booking = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <Container>
      <HeaderHero></HeaderHero>
      <BookingNavigation>
        <TabsContainer>
          <Tabs>
            <Tab
              onClick={() => setActiveTab('flights')}
              selected={activeTab === 'flights'}
            >
              Flights
            </Tab>
            <div className="v-separator" />
            <Tab
              onClick={() => setActiveTab('hotels')}
              selected={activeTab === 'hotels'}
            >
              Hotels
            </Tab>
          </Tabs>

          {activeTab === 'flights' ? (
            <FlightsTab>
              <p>Flights Tab</p>
            </FlightsTab>
          ) : (
            <HotelsTab>
              <p>Hotels Tab</p>
            </HotelsTab>
          )}
        </TabsContainer>
      </BookingNavigation>
      <BodyContent>
        <PopularRoutes>
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
                <RouteCard bgImage={item.thumb}>
                  <div className="thumb" />
                  <div className="info">
                    <h3>{item.name}</h3>
                    <small>From</small>
                    <div className="price">
                      <p className="old-price">
                        {converNumberToBRL(item.price.from)}
                      </p>
                      <AiOutlineArrowRight size={12} />
                      <p>{converNumberToBRL(item.price.to)}</p>
                    </div>
                  </div>
                </RouteCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </PopularRoutes>
      </BodyContent>
    </Container>
  );
};
