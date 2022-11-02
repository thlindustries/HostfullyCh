import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    colorBg: '#c4c4c4',
    colorPrimary: '#ff473f',
    colorPrimaryVariant: '#e45657',
    colorWhite: '#ffffff',
    colorBlack: '#000000',
    colorGray200: '#FBFBFB',
    colorGray250: '#e8e8e8',
    colorGray300: '#ADADAD',
    colorGray350: '#4f4f4f',

    // burgerColors
    colorBurgerBg: '#effffa',
    colorBurgerText: '#0d0c1d',

    // headerColors
    scrollingHeaderColor: 'rgba(0,0,0,0.3)',
    blueNight: '#3f3da8',
    lightYellow: '#c9b900',
    brazilGreen: '#00cf53',

    // Theme-mutables
    primaryTextColor: '#ffff',
    secondaryTextColor: '#2b2b2b',
    primaryBg: '#2b2b2b',
    secondaryBg: '#616161',
    darkerBg: '#303030',

    // Skeleton
    skeletonBg0: 'rgba(255, 255, 255, 0)',
    skeletonBg50: 'rgba(255, 255, 255, 0.4)',
    skeletonBg100: 'rgba(255, 255, 255, 0)',
  },
};
