"use client"
import type {ReactNode} from 'react';
import { useMemo} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import type { ThemeOptions} from '@mui/material/styles';
import {createTheme, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
import type { Theme } from '@interface';
import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows';

export function ThemeProvider({ children }: {children: ReactNode}): ReactNode {

  const memoizedValue = useMemo<ThemeOptions>(
    ()  => ({
      palette,
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue) as Theme;

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
