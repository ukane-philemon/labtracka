import '@assets/stylesheets/global.css';

import { useScrollToTop } from '@components/hooks';
import {Router} from '@router'
import { ThemeProvider } from '@components/theme';
import {type ReactNode} from "react";

// ----------------------------------------------------------------------

export default function App(): ReactNode {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
