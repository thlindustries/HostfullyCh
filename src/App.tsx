import AppProvider from 'hooks';
import { Routes } from './routes';
import GlobalStyle from './styles/global';

export const App = (): JSX.Element => (
  <AppProvider>
    <GlobalStyle />
    <Routes />
  </AppProvider>
);
