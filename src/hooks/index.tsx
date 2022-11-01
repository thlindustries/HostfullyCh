import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { ThemeCustomizationProvider } from './theme';

const queryClient = new QueryClient();

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps): JSX.Element => (
  <ThemeCustomizationProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </ThemeCustomizationProvider>
);

export default AppProvider;
