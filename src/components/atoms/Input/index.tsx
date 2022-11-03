import { useRef } from 'react';

import { Container, StyledInput } from './styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  warning?: string;
  className?: string;
  label?: string;
  containerWidth?: string;
};

export const Input = ({
  label,
  containerWidth = '',
  ...rest
}: InputProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container containerWidth={containerWidth}>
      <StyledInput placeholder="" {...rest} ref={inputRef} />
      {label && <label>{label}</label>}
    </Container>
  );
};
