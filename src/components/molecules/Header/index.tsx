import { useEffect, useRef, useState, useCallback } from 'react';
import {
  MdFlightTakeoff,
  MdFreeCancellation,
  MdOutlineUpdate,
} from 'react-icons/md';
import { AiFillHome, AiFillSchedule } from 'react-icons/ai';
import { BiSun, BiMoon } from 'react-icons/bi';

import { HamburguerMenu } from './HamburguerMenu';
import { ExpandedMenu } from './ExpandedMenu';

import { Toggle } from 'components/atoms/Toggle';

import {
  Container,
  LogoContainer,
  OptionsContainer,
  ThemeChangerContainer,
} from './styles';
import { useTheme } from 'hooks/theme';

const headerItems = [
  {
    link: '/',
    text: 'Home',
    icon: <AiFillHome size={20} />,
  },
  {
    link: '/booking/list/',
    text: 'Your trips',
    icon: <AiFillSchedule size={20} />,
  },
  // {
  //   link: '/booking/update/',
  //   text: 'Update your trip',
  //   icon: <MdOutlineUpdate size={20} />,
  // },
  // {
  //   link: '/booking/delete/',
  //   text: 'Abandon trip',
  //   icon: <MdFreeCancellation size={20} />,
  // },
];

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [previousWidth, setPreviousWidth] = useState(() => window.innerWidth);
  const [previousScrollPos, setPreviousScrollPos] = useState({
    x: 0,
    y: 0,
  });
  const [isHidden, setIsHidden] = useState(false);

  const timeoutRef = useRef<any>(null);

  const { setTheme, selectedTheme } = useTheme();

  const toggleMenu = (): void => {
    const nextMenuState = !isMenuOpen;
    setIsMenuOpen(nextMenuState);

    if (nextMenuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleScroll = useCallback((): void => {
    const currentScrollYPos = window.scrollY;
    const currentScrollXPos = window.scrollX;

    if (currentScrollYPos > previousScrollPos.y) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setPreviousScrollPos({
      x: currentScrollXPos,
      y: currentScrollYPos,
    });
  }, [previousScrollPos]);

  const handleResize = (): void => {
    const currentWidth = window.innerWidth;

    setPreviousWidth(currentWidth);
  };

  const debounce = (callback: () => void, time: number): void => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      callback();
    }, time);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      debounce(handleScroll, 250);
    });

    window.addEventListener('resize', () => {
      debounce(handleResize, 120);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [previousScrollPos]);

  return (
    <Container hidden={isHidden} transparentBg={previousScrollPos.y === 0}>
      <LogoContainer>
        <MdFlightTakeoff size={32} />
        <div className="body">
          <p>Hostfully Booking</p>
          <span>Book your trip in instants</span>
        </div>
      </LogoContainer>
      <OptionsContainer collapsed={previousWidth < 1200}>
        {previousWidth >= 1200 ? (
          <ExpandedMenu headerItems={headerItems} />
        ) : (
          <HamburguerMenu
            headerItems={headerItems}
            isOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            color={
              previousScrollPos.y === 0
                ? selectedTheme.colors.secondaryBg
                : selectedTheme.colors.primaryBg
            }
          />
        )}
      </OptionsContainer>
      <ThemeChangerContainer>
        <Toggle
          bgIconOn={<BiMoon size={12} />}
          bgIconOff={<BiSun size={12} />}
          defaultValue={selectedTheme.name !== 'default'}
          callback={() =>
            setTheme(selectedTheme.name === 'default' ? 'dark' : 'default')
          }
        />
      </ThemeChangerContainer>
    </Container>
  );
};
