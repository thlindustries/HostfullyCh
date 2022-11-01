import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Public pages
import {
  Booking,
  BookingManager,
  BookingDetails,
  CreateBooking,
} from 'pages/booking';
import { Layout } from 'components/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Booking />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking/:routeId" element={<BookingDetails />} />
      <Route path="/booking/create/:routeId" element={<CreateBooking />} />
      <Route path="/booking/list" element={<BookingManager />} />
    </Route>,
  ),
);

export const Routes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
