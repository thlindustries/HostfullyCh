import { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

import { api } from 'services/api';

interface TripContextData {
  isLoading: boolean;
  userName: string;
  deleteBooking: (trip: BookedTrip) => Promise<void>;
  updateBooking: (trip: BookedTrip, data: Record<any, any>) => Promise<void>;
  setUserName: (name: string) => void;
  getBookedTrips: () => Promise<BookedTrip[]>;
  getRouteDetails: (routeId: string) => Promise<RouteDetailsDTO>;
  getRouteAvailability: (routeId: string) => Promise<RouteAvailabilityDTO>;
  createBooking: (
    data: Record<string, any>,
    tripId: string,
    routeId: string,
    routeAvailability: RouteAvailabilityDTO,
  ) => Promise<{ status: number }>;
}

export type BookedTrip = {
  name: string;
  lastName: string;
  age: string;
  id: string;
  parentTripId: string;
  from: string;
  to: string;
};

type TripProviderProps = {
  children: React.ReactNode;
};

type RouteDetailsDTO = {
  name: string;
  description: string;
  id: string;
  images: Array<{
    altText: string;
    path: string;
  }>;
  price: {
    from: number;
    to: number;
  };
};

export type RouteAvailabilityDTO = {
  tripId: string;
  availablePeriods: Array<{
    id: string;
    from: string;
    to: string;
    available: boolean;
  }>;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const TripContext = createContext<TripContextData>({} as TripContextData);

export const TripProvider = ({ children }: TripProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState(() => {
    const name = localStorage.getItem('@hostfully:username');
    return name ?? '';
  });

  const handleSetUserName = (name: string): void => {
    localStorage.setItem('@hostfully:username', name);
    setUserName(name);
  };

  const getRouteDetails = async (routeId: string): Promise<RouteDetailsDTO> => {
    const response = await api.get<RouteDetailsDTO>(`/booking/${routeId}`);
    return response.data;
  };

  const getRouteAvailability = async (
    routeId: string,
  ): Promise<RouteAvailabilityDTO> => {
    const response = await api.get<RouteAvailabilityDTO>(
      `/tripsAvailability/${routeId}`,
    );
    return response.data;
  };

  const getBookedTrips = async (): Promise<BookedTrip[]> => {
    const response = await api.get<BookedTrip[]>(`/bookedTrips`);
    return response.data;
  };

  const createBooking = async (
    data: Record<string, any>,
    routeId: string,
    tripId: string,
    routeAvailability: RouteAvailabilityDTO,
  ): Promise<{ status: number }> => {
    /**
     * This function makes a basic validation to check if some one already booked the trip
     *
     * Details: if you open the availability modal and click outside the browser than open an other window
     * and make a booking from this new window when you click back to the old window the availability will change
     *
     * magic? no, react query!
     *
     * If you don't submit the booking form and open two windows with the same date selected there'll be an other validation
     * fetching again the availability before booking the trip (I know that is a duplicated request but for now is a simple validation xD)
     */
    if (!data) return { status: 500 };
    const udpatedRouteAvailability = { ...routeAvailability };
    const updatedTrip = udpatedRouteAvailability?.availablePeriods?.find(
      (item) => item.id === tripId,
    );

    setIsLoading(true);
    const oldAvailability = await api.get<RouteAvailabilityDTO>(
      `/tripsAvailability/${routeId}`,
    );
    setIsLoading(false);

    if (!oldAvailability) {
      toast.error('Oops, something went wrong, try again :(');
      return { status: 500 };
    }

    if (!updatedTrip || !updatedTrip.available) {
      toast.error('Oops, something went wrong, try again :(');
      return { status: 500 };
    }

    const isAvailable = oldAvailability.data.availablePeriods.find(
      (trip) => trip.id === tripId,
    )?.available;

    if (!isAvailable) {
      toast.error(
        'Oops, looks like some one already booked this trip, try an other date :(',
      );
      return { status: 500 };
    }

    updatedTrip.available = false;

    setIsLoading(true);
    try {
      await api.patch(
        `/tripsAvailability/${routeId}`,
        udpatedRouteAvailability,
      );
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      return { status: 500 };
    }

    const response = await api.post('/bookedTrips', {
      name: data.name,
      lastName: data.lastName,
      age: data.age,
      from: updatedTrip.from,
      to: updatedTrip.to,
      id: tripId,
      parentTripId: routeId,
    });

    setIsLoading(false);

    return { status: response.status };
  };

  const deleteBooking = async (trip: BookedTrip): Promise<void> => {
    setIsLoading(true);
    /** Observations:
     *
     * Of course this isn't the right way to delete something but I think that
     * this is enough to this test, it's just a way to make things work
     *
     * As I'm using JSON-server and not a structured back-end I'm building this type of
     * work-arround just to make easier to show you things happening :D
     */

    try {
      await api.delete(`/bookedTrips/${trip.id}`);
      const availability = await api.get<RouteAvailabilityDTO>(
        `/tripsAvailability/${trip.parentTripId}`,
      );
      const updatedAvailability = { ...availability.data };
      const updatedTrip = updatedAvailability.availablePeriods.find(
        (i) => i.id === trip.id,
      );
      if (updatedTrip) {
        updatedTrip.available = true;

        await api.patch(
          `/tripsAvailability/${trip.parentTripId}`,
          updatedAvailability,
        );
      }
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  const updateBooking = async (
    trip: BookedTrip,
    data: Record<any, any>,
  ): Promise<void> => {
    setIsLoading(true);
    try {
      await api.patch(`/bookedTrips/${trip.id}`, data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <TripContext.Provider
      value={{
        isLoading,
        userName,
        deleteBooking,
        updateBooking,
        setUserName: handleSetUserName,
        getBookedTrips,
        createBooking,
        getRouteAvailability,
        getRouteDetails,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

export function useTrip(): TripContextData {
  const context = useContext(TripContext);

  return context;
}
