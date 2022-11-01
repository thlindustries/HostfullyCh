import React, { createContext, useContext, useState } from 'react';

import { defaultTheme, darkTheme } from 'themes';
import { DefaultColors, DefaultTheme, ThemeProvider } from 'styled-components';

type ThemeContextData = {
  selectedTheme: DefaultTheme;
  updateThemeColor: (field: keyof DefaultColors, color: string) => void;
  saveCustomTheme: () => void;
  resetTheme: () => void;
  setTheme: (themName: string) => void;
};

type ThemeCustomizationProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeCustomizationProvider = ({
  children,
}: ThemeCustomizationProviderProps): JSX.Element => {
  const [selectedTheme, setSelectedTheme] = useState<DefaultTheme>(() => {
    const savedTheme = localStorage.getItem('@hostfully:theme');
    if (savedTheme) {
      return JSON.parse(savedTheme);
    }
    return defaultTheme;
  });

  const updateThemeColor = (
    field: keyof DefaultColors,
    color: string,
  ): void => {
    const updatedCustomTheme = { ...selectedTheme };

    updatedCustomTheme.colors[field] = color;

    setSelectedTheme(updatedCustomTheme);
  };

  const saveCustomTheme = (): void => {
    localStorage.setItem('@hostfully:theme', JSON.stringify(selectedTheme));
  };

  const resetTheme = (): void => {
    localStorage.removeItem('@hostfully:theme');
  };

  const setTheme = (themeName: string): void => {
    let updatedTheme;

    switch (themeName) {
      case 'dark':
        updatedTheme = darkTheme;
        break;
      default:
        updatedTheme = defaultTheme;
        break;
    }

    setSelectedTheme(updatedTheme);
    localStorage.setItem('@hostfully:theme', JSON.stringify(updatedTheme));
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <ThemeContext.Provider
        value={{
          selectedTheme,
          updateThemeColor,
          saveCustomTheme,
          resetTheme,
          setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Custom Theme provider error');
  }

  return context;
}
