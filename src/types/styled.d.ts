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
    colorGray300: string;
    colorFooter: string;
    colorBurgerBg: string;
    colorBurgerText: string;
    scrollingHeaderColor: string;
  }
}
