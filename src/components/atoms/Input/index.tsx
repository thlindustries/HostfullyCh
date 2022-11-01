import { Container, StyledInput } from './styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  warning?: string;
  className?: string;
  label?: string;
};

export const Input = ({ label, ...rest }: InputProps): JSX.Element => {
  return (
    <Container>
      <StyledInput {...rest} />
      {label && <label>{label}</label>}
    </Container>
  );
};
