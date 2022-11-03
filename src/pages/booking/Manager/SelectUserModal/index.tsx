import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';

import { useTrip } from 'hooks/trip';

import { Container } from './styles';
import { toast } from 'react-toastify';

export const SelectUserModal = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const { setUserName } = useTrip();

  const handleSetUserName = (): void => {
    if (!inputValue) {
      toast.warn('Hey bro, help me, put the name there🥲🥲!');
      return;
    }

    setUserName(inputValue);
  };

  return (
    <Container>
      <h3 className="m-title">{`Tell me the traveller's name`}</h3>

      <Input label="Name" onChange={(e) => setInputValue(e.target.value)} />
      <div className="btns-container">
        <Button buttonType="primary" type="button" onClick={handleSetUserName}>
          Ok
        </Button>
        <Button
          buttonType="secondary"
          type="button"
          onClick={() => navigate('/')}
        >
          {`No trip yet? Let's book one!`}
        </Button>
      </div>
    </Container>
  );
};
