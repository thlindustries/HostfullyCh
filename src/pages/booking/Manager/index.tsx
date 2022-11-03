import { useState } from 'react';
import { AiFillEdit, AiFillDelete, AiFillCheckSquare } from 'react-icons/ai';

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
  const [editableTripInfo, setEditableTripInfo] = useState({
    age: '',
    lastName: '',
  });
  const [isEditting, setIsEditting] = useState(false);

  const { userName, isLoading, deleteBooking, updateBooking, getBookedTrips } =
    useTrip();

  const { data: bookedTrips, refetch } = useQuery<BookedTrip[]>(
    ['bookedTrips'],
    getBookedTrips,
  );

  const handleEdit = (trip: BookedTrip): void => {
    if (editableTripInfo.age || editableTripInfo.lastName) {
      const updatedInfo = {
        age: editableTripInfo.age || trip.age,
        lastName: editableTripInfo.lastName || trip.lastName,
      };

      updateBooking(trip, updatedInfo)
        .then(() => {
          toast.success('Trip Updated :D');
          refetch().catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
          toast.error('oops, something went wrong');
        });

      setEditableTripInfo({
        age: '',
        lastName: '',
      });
    }

    setIsEditting(false);
  };

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

  const getRowElement = (children: string, elementId: string): JSX.Element => {
    if (isEditting)
      return (
        <input
          onChange={(e) =>
            setEditableTripInfo((prevInfo) => ({
              ...prevInfo,
              [elementId]: e.target.value,
            }))
          }
          defaultValue={children}
        />
      );

    return <p>{children}</p>;
  };

  return (
    <Container>
      {userName ? (
        <ManagerTable>
          {(!userTrips || userTrips.length) < 1 ? (
            <p>No trips for this user Yet 😰</p>
          ) : (
            <TripsTableContainer isLoading={isLoading}>
              {!isLoading ? (
                <>
                  <TripsRow>
                    <p>Trip Id</p>
                    <p>{`Traveller's Name`}</p>
                    <p>Last name</p>
                    <p>Age</p>
                    <p>from</p>
                    <p>To</p>
                    <p>Edit</p>
                    <p>Delete</p>
                  </TripsRow>
                </>
              ) : null}
              {!isLoading &&
                userTrips?.map((trip) => (
                  <TripsRow key={trip.id}>
                    <p className="id"> {trip.id}</p>
                    <p>{trip.name}</p>
                    <>{getRowElement(trip.lastName, 'lastName')}</>
                    <>{getRowElement(trip.age, 'age')}</>
                    <p>{new Date(trip.from).toDateString()}</p>
                    <p>{new Date(trip.to).toDateString()}</p>
                    {isEditting ? (
                      <button type="button" onClick={() => handleEdit(trip)}>
                        <AiFillCheckSquare className="edit" size={32} />
                      </button>
                    ) : (
                      <button type="button" onClick={() => setIsEditting(true)}>
                        <AiFillEdit className="edit" size={22} />
                      </button>
                    )}
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
