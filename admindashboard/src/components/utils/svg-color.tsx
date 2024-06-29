import { forwardRef, type ReactNode } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

// ----------------------------------------------------------------------

export const SvgColor = forwardRef(function SvgColorFunc(
  {
    src,
    sx,
    ...other
  }: { src: string; sx?: SxProps<Theme>; other?: ReactNode },
  ref,
) {
  return (
    <Box
      component="span"
      className="svg-color"
      ref={ref}
      sx={{
        width: 24,
        height: 24,
        display: "inline-block",
        bgcolor: "currentColor",
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  );
});
