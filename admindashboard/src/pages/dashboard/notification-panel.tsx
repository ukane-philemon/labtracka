import { forwardRef, type ReactNode } from "react";
import { Avatar, Box, Drawer, Paper, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import closeNotification from "@assets/icons/close_notification.svg";
import { mockAccount } from "@mock";


export const NotificationPanel = forwardRef(function NotificationPanelForwardRef(
  { handleClosePanel, openPanel }: { handleClosePanel: () => void, openPanel: boolean }
): ReactNode {
  const handleCloseButton = (): void => {
    handleClosePanel();
  }

  return (
    <Drawer anchor="right" open={openPanel} onClose={handleClosePanel}>
      <Box p={5} sx={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(245, 248, 250, 1)',
        height: '100%',
        width: '402px',
      }}>
        <Stack pb={4} direction='row' sx={{
          alignItems: 'center',
          height: '32px',
          justifyContent: 'space-between',
        }}>
          <Typography variant="h4">Notifications</Typography>
          <IconButton onClick={handleCloseButton}>
            <Avatar src={closeNotification} variant="rounded" sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Stack>

        <Stack gap={1}>
          {mockAccount.notifications.map(({ key, icon, time, content }) => (
            <Paper elevation={1} key={key} >
              <Stack p={1} direction='row' gap={1} sx={{ width: '100%' }}>
                <Avatar src={icon} variant="rounded" sx={{ height: 23, width: 24 }} />
                <Stack sx={{ width: '226px' }}>
                  <Typography variant="subtitle2" sx={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    width: '100%',
                    whiteSpace: 'nowrap',
                  }}>{content}</Typography>
                  <Typography variant="caption">{time}</Typography>
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Box>

    </Drawer>
  )
})
