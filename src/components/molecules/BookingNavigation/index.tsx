import { AiFillEye } from 'react-icons/ai';

import { BookedTrip } from 'hooks/trip';

import {
  TabsContainer,
  Tabs,
  Tab,
  TabContent,
  TabHeader,
  TabRows,
  TripRow,
} from './styles';

type BookingNavigationProps = {
  activeTab: string;
  items: BookedTrip[] | undefined;
  setActiveTab: (tab: string) => void;
};

export const BookingNavigation = ({
  activeTab,
  items,
  setActiveTab,
}: BookingNavigationProps): JSX.Element => {
  return (
    <TabsContainer>
      <Tabs>
        <Tab
          onClick={() => setActiveTab('flights')}
          selected={activeTab === 'flights'}
        >
          <AiFillEye size={20} />
          Trips
        </Tab>
      </Tabs>

      <TabContent>
        <TabHeader>
          <p>Traveller</p>
          <p>Travel ID</p>
          <p>From</p>
          <p>To</p>
        </TabHeader>
        <TabRows>
          {items?.map((item) => (
            <TripRow key={item.id}>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>{new Date(item.from).toDateString()}</p>
              <p>{new Date(item.to).toDateString()}</p>
            </TripRow>
          ))}
        </TabRows>
      </TabContent>
    </TabsContainer>
  );
};
