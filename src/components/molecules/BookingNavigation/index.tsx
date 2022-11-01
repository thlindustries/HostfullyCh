import { Input } from 'components/atoms/Input';

import { TabsContainer, Tabs, Tab, TabContent } from './styles';

type BookingNavigationProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const BookingNavigation = ({
  activeTab,
  setActiveTab,
}: BookingNavigationProps): JSX.Element => {
  const handleScheduleFlights = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log(e);
  };

  return (
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
        <TabContent>
          <form onSubmit={handleScheduleFlights}>
            <Input type="text" label="Teste" />
          </form>
        </TabContent>
      ) : (
        <TabContent></TabContent>
      )}
    </TabsContainer>
  );
};
