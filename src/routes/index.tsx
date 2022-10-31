  import React from 'react';
import {
  Routes as DRoutes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Public pages
import {
  Booking,
  CreateBooking,
  DeleteBooking,
  UpdateBooking,
} from 'pages/booking';
import { Layout } from 'components/layout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/booking" element={<Booking />}/>
      <Route path="/" element={<Booking />}/>
      <Route path="/booking/create" element={<CreateBooking />}/>
      <Route path="/booking/delete" element={<DeleteBooking />}>
        <Route index element={<DeleteBooking />}/>
        <Route path=":id" element={<DeleteBooking />}/>
      </Route>
      <Route path="/booking/update" element={<UpdateBooking />}>
        <Route index element={<UpdateBooking />}/>
        <Route path=":id" element={<UpdateBooking />}/>
      </Route>
    </Route>
  )
)

export const Routes: React.FC = () => {
  return (
      <RouterProvider router={router} />
  );
};
