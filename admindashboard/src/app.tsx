import '@assets/stylesheets/global.css';

import {type ReactNode} from "react";
import { useScrollToTop } from '@components/hooks';
import { ThemeProvider } from '@components/theme';
import {Router} from './router'

// ----------------------------------------------------------------------

export default function App(): ReactNode {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
