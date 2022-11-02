import Loading from 'components/atoms/Loading';

import { Container } from './styles';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  Icon?: JSX.Element;
  buttonType?: 'primary' | 'secondary';
  loading?: boolean;
};

export const Button = ({
  buttonType,
  children,
  loading = false,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <Container buttonType={buttonType} {...rest}>
      {loading ? <Loading size={2} /> : children ?? null}
    </Container>
  );
};
