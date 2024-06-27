import Box from '@mui/material/Box';
import type { ReactNode } from 'react';
import type { SxProps } from '@mui/material';
import { useResponsive } from '@components/hooks';
import { NAV } from '@components/constants';
import type { Theme } from '@interface';


// ----------------------------------------------------------------------

export default function Main({ children, sx, ...other }: {
  children: ReactNode, sx?: SxProps<Theme>, other?: ReactNode
}): ReactNode {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        // py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          px: 2,
          //   // py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
