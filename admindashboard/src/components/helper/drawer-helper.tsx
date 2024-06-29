import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material"
import type { ReactNode } from "react";
import { DRAWER } from "@components/constants"
import closeNotification from "@assets/icons/close_notification.svg";

export const DrawerHelper = (
  { openPanel, handleClosePanel, title, children, ...others }:
    { openPanel: boolean,
      handleClosePanel: () => void,
      title: string,
      children: ReactNode,
    }
): ReactNode => {
  const handleCloseButton = (): void => {
    handleClosePanel();
  }
  return (
    <Drawer anchor="right" open={openPanel} onClose={handleClosePanel} {...others}>
      <Stack p={4} gap={3} sx={{
        height: "100%",
        width: DRAWER.D_DESKTOP_WIDTH,
      }}>
        <Stack direction='row' sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={handleCloseButton}>
            <Box
              component="img"
              src={closeNotification}
              sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Stack>
        {children}
      </Stack>
    </Drawer>
  )
}
