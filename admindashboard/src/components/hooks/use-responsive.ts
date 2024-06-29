import { useTheme } from "@mui/material/styles";
import type { Breakpoint } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// ----------------------------------------------------------------------

export function useResponsive(
  query: "up" | "down" | "between",
  start: Breakpoint,
  end?: Breakpoint,
): boolean {
  const theme = useTheme();
  let themeRange = theme.breakpoints.only(start);

  switch (query) {
    case "up":
      themeRange = theme.breakpoints.up(start);
      break;
    case "down":
      themeRange = theme.breakpoints.down(start);
      break;

    case "between":
      if (end) themeRange = theme.breakpoints.between(start, end);
      break;
  }
  return useMediaQuery(themeRange);
}
