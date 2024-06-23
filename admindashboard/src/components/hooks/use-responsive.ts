import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

export function useResponsive(query: "up" | "down" | "between", start: Breakpoint, end?: Breakpoint) {
  const theme = useTheme();

  switch (query) {
    case "up":
      return useMediaQuery(theme.breakpoints.up(start));
    case "down":
      return useMediaQuery(theme.breakpoints.down(start));
    case "between":
      if (end)
        return useMediaQuery(theme.breakpoints.between(start, end));
      break
    }
    return useMediaQuery(theme.breakpoints.only(start));
}

// ----------------------------------------------------------------------

export function useWidth() {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
