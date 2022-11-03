import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

import { BookedTrip, useTrip } from 'hooks/trip';

import { Modal } from 'components/atoms/Modal';
import Loading from 'components/atoms/Loading';

import { SelectUserModal } from './SelectUserModal';
import {
  Container,
  ManagerTable,
  TripsTableContainer,
  TripsRow,
} from './styles';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

export const BookingManager = (): JSX.Element => {
  const { userName, isLoading, deleteBooking, getBookedTrips } = useTrip();

  const { data: bookedTrips, refetch } = useQuery<BookedTrip[]>(
    ['bookedTrips'],
    getBookedTrips,
  );

  const handleEdit = (trip: BookedTrip): void => {};

  const handleDelete = (trip: BookedTrip): void => {
    deleteBooking(trip)
      .then(() => {
        toast.success('Trip Deleted :(');
        refetch().catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        toast.error('oops, something went wrong');
      });
  };

  const userTrips = bookedTrips?.filter((trip) => trip.name === userName);

  return (
    <Container>
      {userName ? (
        <ManagerTable>
          {(!userTrips || userTrips.length) < 1 ? (
            <p>No trips for this user Yet 😰</p>
          ) : (
            <TripsTableContainer isLoading={isLoading}>
              {!isLoading &&
                userTrips?.map((trip) => (
                  <TripsRow key={trip.id}>
                    <p className="id"> {trip.id}</p>
                    <p>{trip.name}</p>
                    <p>{trip.lastName}</p>
                    <p>{trip.age}</p>
                    <p>{new Date(trip.from).toDateString()}</p>
                    <p>{new Date(trip.to).toDateString()}</p>
                    <button type="button" onClick={() => handleEdit(trip)}>
                      <AiFillEdit className="edit" size={22} />
                    </button>
                    <button type="button" onClick={() => handleDelete(trip)}>
                      <AiFillDelete className="delete" size={22} />
                    </button>
                  </TripsRow>
                ))}
              {isLoading ? <Loading size={2} /> : null}
            </TripsTableContainer>
          )}
        </ManagerTable>
      ) : (
        <Modal center isOpen={!userName}>
          <SelectUserModal />
        </Modal>
      )}
    </Container>
  );
};
