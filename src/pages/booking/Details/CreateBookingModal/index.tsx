import { useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { useTrip } from 'hooks/trip';

import { RouteAvailabilityDTO } from 'pages/booking/Details';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';

import {
  Container,
  CloseBtn,
  BookingDates,
  AvailabilityRow,
  InputsContainer,
} from './styles';

type CreateBookingModalProps = {
  selectedTripDate: string;
  routeAvailability: RouteAvailabilityDTO;
  onSelectetTrip: (id: string) => void;
  onSumbit: (data: Record<string, any>) => Promise<void>;
  toggleModal: (state?: boolean) => void;
};

export const CreateBookingModal = ({
  selectedTripDate,
  routeAvailability,
  onSelectetTrip,
  onSumbit,
  toggleModal,
}: CreateBookingModalProps): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  const { isLoading } = useTrip();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);

    const parsedData = {
      name: data.get('name'),
      lastName: data.get('lastName'),
      age: data.get('age'),
    };

    onSumbit(parsedData)
      .then(() => {
        formRef.current?.reset();
        toggleModal(false);
      })
      .catch((err) => console.log(err));
  };

  const getAvailabilityRowState = (availability: {
    id: string;
    from: string;
    to: string;
    available: boolean;
  }): string => {
    if (!availability.available) return 'unavailable';
    if (availability.id === selectedTripDate) return 'selected';

    return '';
  };

  return (
    <Container>
      <CloseBtn>
        <button type="button" onClick={() => toggleModal(false)}>
          X
        </button>
      </CloseBtn>
      <form ref={formRef} onSubmit={handleSubmit}>
        <InputsContainer>
          <Input name="name" label="name" containerWidth="100%" />
          <Input name="lastName" label="last name" containerWidth="100%" />
          <Input name="age" label="age" containerWidth="100%" />
        </InputsContainer>
        <span>Available Dates</span>
        <BookingDates>
          {routeAvailability?.availablePeriods.map((availability) => (
            <AvailabilityRow
              state={getAvailabilityRowState(availability)}
              key={availability.id}
              onClick={() => onSelectetTrip(availability.id)}
            >
              <p>
                {new Date(availability?.from).toLocaleString()}{' '}
                <AiOutlineArrowRight size={12} />{' '}
                {new Date(availability?.to).toLocaleString()}
              </p>
            </AvailabilityRow>
          ))}
        </BookingDates>
        <Button
          buttonType="primary"
          type="submit"
          loading={isLoading}
          disabled={
            (isLoading ||
              routeAvailability?.availablePeriods?.every(
                (item) => !item.available,
              )) ??
            false
          }
        >
          Book trip
        </Button>
      </form>
    </Container>
  );
};
