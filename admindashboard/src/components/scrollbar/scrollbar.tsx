"use client"
import type { ForwardedRef, ReactNode } from 'react';
import { forwardRef, memo } from 'react';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import { StyledRootScrollbar, StyledScrollbar } from './styles';

interface ScrollbarInterface {
  children?: ReactNode;
  sx?: SxProps<Theme>
}

export const Scrollbar = forwardRef<HTMLElement, ScrollbarInterface>(
  function ScrollbarForwardRef({ children, sx, ...other },
    ref: ForwardedRef<HTMLElement>): ReactNode {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    return mobile ? (
      <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    ) : (
      <StyledRootScrollbar>
        <StyledScrollbar
          clickOnTrack={false}
          scrollableNodeProps={{
            ref,
          }}
          sx={sx}
          {...other}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  })



export default memo(Scrollbar);