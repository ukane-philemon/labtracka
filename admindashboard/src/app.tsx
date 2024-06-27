import '@assets/stylesheets/global.css';

import {type ReactNode} from "react";
import { useScrollToTop } from '@components/hooks';
import {Router} from '@router'
import { ThemeProvider } from '@components/theme';

// ----------------------------------------------------------------------

export default function App(): ReactNode {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
