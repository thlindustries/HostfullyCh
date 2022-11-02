import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppProvider from 'hooks';
import { Routes } from './routes';
import GlobalStyle from './styles/global';

export const App = (): JSX.Element => (
  <AppProvider>
    <ToastContainer />
    <GlobalStyle />
    <Routes />
  </AppProvider>
);
