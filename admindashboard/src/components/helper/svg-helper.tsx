import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

export const SvgHelper = ({ src, sx }: { src: string, sx?: SxProps<Theme> }): ReactNode => (
  <Box component="img" src={src} sx={{ height: 20, width: 20, ...sx }} />
)