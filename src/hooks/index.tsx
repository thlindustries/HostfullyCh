import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { TripProvider } from './trip';
import { ThemeCustomizationProvider } from './theme';

const queryClient = new QueryClient();

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps): JSX.Element => (
  <ThemeCustomizationProvider>
    <QueryClientProvider client={queryClient}>
      <TripProvider>{children}</TripProvider>
    </QueryClientProvider>
  </ThemeCustomizationProvider>
);

export default AppProvider;
