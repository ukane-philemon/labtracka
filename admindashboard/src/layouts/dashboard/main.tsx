import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";
import { useResponsive } from "@components/hooks";
import { HEADER, NAV, SPACING } from "@components/constants";

// ----------------------------------------------------------------------

export default function Main({
  children,
  sx,
  ...other
}: {
  children: ReactNode;
  sx?: SxProps<Theme>;
  other?: ReactNode;
}): ReactNode {
  const lgUp = useResponsive("up", "lg");

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        py: `${(HEADER.H_MOBILE + SPACING).toString()}px`,
        ...(lgUp && {
          px: 2,
          py: `${(HEADER.H_DESKTOP + SPACING).toString()}px`,
          width: `calc(100% - ${NAV.WIDTH.toString()}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
