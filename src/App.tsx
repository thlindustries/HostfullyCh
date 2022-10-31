import { BrowserRouter } from 'react-router-dom';

import AppProvider from 'hooks';
import { Routes } from './routes';
import GlobalStyle from './styles/global';
import { Layout } from 'components/layout';

export const App = (): JSX.Element => (
  <AppProvider>
    <GlobalStyle />
    <Routes />
  </AppProvider>
);
