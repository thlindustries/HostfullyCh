import { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { api } from 'services/api';

interface TripContextData {
  isLoading: boolean;
  userName: string;
  setUserName: (name: string) => void;
  getRouteDetails: (routeId: string) => Promise<RouteDetailsDTO>;
  getRouteAvailability: (routeId: string) => Promise<RouteAvailabilityDTO>;
  createBooking: (
    data: Record<string, any>,
    tripId: string,
    routeId: string,
    routeAvailability: RouteAvailabilityDTO,
  ) => Promise<{ status: number }>;
}

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

    if (!oldAvailability) {
      toast.error('Oops, something went wrong, try again :(');
      setIsLoading(false);
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
    const response = await api.patch(
      `/tripsAvailability/${routeId}`,
      udpatedRouteAvailability,
    );
    setIsLoading(false);

    return { status: response.status };
  };

  return (
    <TripContext.Provider
      value={{
        isLoading,
        setUserName: handleSetUserName,
        createBooking,
        getRouteAvailability,
        getRouteDetails,
        userName,
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
