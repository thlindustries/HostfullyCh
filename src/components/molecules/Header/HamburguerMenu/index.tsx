import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleNavigate = (link: string): void => {
    toggleMenu();
    navigate(link)
  }

  return (
    <MenuContainer>
      <StyledBurger open={isOpen} onClick={toggleMenu} color={color}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu open={isOpen}>
        {headerItems.map((item) => (
          <span key={item.text} onClick={()=>handleNavigate(item.link)}>
            {item.icon}
            {item.text}
          </span>
        ))}
      </StyledMenu>
    </MenuContainer>
  );
};
