import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export type HeaderItems = Array<{
  link: string;
  text: string;
  icon: JSX.Element;
}>;

type ExpandedMenuProps = {
  headerItems: HeaderItems;
};

export const ExpandedMenu = ({
  headerItems,
}: ExpandedMenuProps): JSX.Element => {
  return (
    <Container>
      {headerItems.map((item) => (
        <NavLink to={item.link} key={item.text} end>
          {item.text}
        </NavLink>
      ))}
    </Container>
  );
};
