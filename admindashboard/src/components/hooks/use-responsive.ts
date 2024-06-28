import { type Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

export function useResponsive(query: "up" | "down" | "between", start: Breakpoint, end?: Breakpoint): boolean {
  const theme = useTheme();
  let themeRange = theme.breakpoints.only(start)

  switch (query) {
    case "up":
      themeRange = theme.breakpoints.up(start);
      break;
    case "down":
      themeRange = theme.breakpoints.down(start);
      break;

    case "between":
      if (end)
        themeRange = theme.breakpoints.between(start, end);
      break
    }
    return useMediaQuery(themeRange);
}

// ----------------------------------------------------------------------

export function useWidth(): string {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- need to check something
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks -- it's fine to check it this way
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
