import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: DefaultColors;
  }
  export interface DefaultColors {
    colorBg: string;
    colorPrimary: string;
    colorPrimaryVariant: string;
    colorWhite: string;
    colorBlack: string;
    colorGray200: string;
    colorGray250: string;
    colorGray300: string;
    colorGray350: string;
    colorBurgerBg: string;
    colorBurgerText: string;
    scrollingHeaderColor: string;
    blueNight: string;
    lightYellow: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    primaryBg: string;
    secondaryBg: string;
    darkerBg: string;
    skeletonBg0: string;
    skeletonBg50: string;
    skeletonBg100: string;
  }
}
