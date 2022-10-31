import { useState } from 'react';
import { Container, BtnCircle } from './styles';

type ToggleProps = {
  bgIconOn?: JSX.Element;
  bgIconOff?: JSX.Element;
  callback?: () => void;
};

export const Toggle = ({
  bgIconOff,
  bgIconOn,
  callback,
}: ToggleProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (): void => {
    callback?.();
    setIsActive((prevState) => !prevState);
  };

  return (
    <Container onClick={handleToggle} active={isActive}>
      <BtnCircle active={isActive}>
        {bgIconOff != null && !isActive && (
          <div className="bg-icon">{bgIconOff}</div>
        )}
        {bgIconOn != null && isActive && (
          <div className="bg-icon">{bgIconOn}</div>
        )}
      </BtnCircle>
      <input
        onChange={handleToggle}
        checked={isActive}
        type="checkbox"
        className="checkbox"
      />
    </Container>
  );
};
