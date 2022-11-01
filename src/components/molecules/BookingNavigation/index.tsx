import { AiFillEye } from 'react-icons/ai';

import { TabsContainer, Tabs, Tab, TabContent } from './styles';

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
          <AiFillEye size={20} />
          Trips
        </Tab>
      </Tabs>

      {activeTab === 'flights' ? (
        <TabContent>
          {/* <form onSubmit={handleScheduleFlights}>
            <Input type="text" label="Teste" />
          </form> */}
        </TabContent>
      ) : (
        <TabContent></TabContent>
      )}
    </TabsContainer>
  );
};
