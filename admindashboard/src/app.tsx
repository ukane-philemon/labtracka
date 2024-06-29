import "@assets/stylesheets/global.css";

import { type ReactNode } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { useScrollToTop } from "@components/hooks";
import { ThemeProvider } from "@components/theme";
import { Router } from "./router";

// ----------------------------------------------------------------------

export default function App(): ReactNode {
  useScrollToTop();

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
