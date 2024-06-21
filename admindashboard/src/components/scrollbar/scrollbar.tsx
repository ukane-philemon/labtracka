"use client"
import type { ReactNode} from 'react';
import {forwardRef, memo} from 'react';
import Box from '@mui/material/Box';
import {StyledRootScrollbar, StyledScrollbar} from './styles';

interface ScrollbarInterface {
  children?: ReactNode;
  sx?: object
}

export const Scrollbar = forwardRef<HTMLElement, ScrollbarInterface>(
    function ScrollbarForwardRef({children, sx, ...other}, ref): ReactNode {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    return mobile ? (
      <Box ref={ref} sx={{overflow: 'auto', ...sx}} {...other}>
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


// eslint-disable-next-line import/no-default-export -- necessary for memo
export default memo(Scrollbar);