import { NavLink } from 'react-router-dom';

import { HeaderItems } from '../ExpandedMenu';

import { MenuContainer, StyledMenu, StyledBurger } from './styles';

type HamburguerMenuProps = {
  headerItems: HeaderItems;
  isOpen: boolean;
  color: string;
  toggleMenu: () => void;
};

export const HamburguerMenu = ({
  headerItems,
  isOpen = false,
  color,
  toggleMenu,
}: HamburguerMenuProps): JSX.Element => {
  return (
    <MenuContainer>
      <StyledBurger open={isOpen} onClick={toggleMenu} color={color}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu open={isOpen}>
        {headerItems.map((item) => (
          <NavLink to={item.link} key={item.text} end>
            {item.icon}
            {item.text}
          </NavLink>
        ))}
      </StyledMenu>
    </MenuContainer>
  );
};
