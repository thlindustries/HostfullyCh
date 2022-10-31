import { TabsContainer, Tabs, Tab, FlightsTab, HotelsTab } from './styles';

type BookingNavigationProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const BookingNavigation = ({
  activeTab,
  setActiveTab,
}: BookingNavigationProps): JSX.Element => {
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
        <FlightsTab>
          <p>Flights Tab</p>
        </FlightsTab>
      ) : (
        <HotelsTab>
          <p>Hotels Tab</p>
        </HotelsTab>
      )}
    </TabsContainer>
  );
};
