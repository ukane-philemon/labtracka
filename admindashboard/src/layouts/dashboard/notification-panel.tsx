import { forwardRef } from "react";
import type { ForwardedRef, ReactNode } from "react";
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import { mockAccount } from "@mock";
import { DrawerHelper } from "@components/helper";


export const NotificationPanel = forwardRef(function NotificationPanelFunc(
  { handleClosePanel, openPanel }: { handleClosePanel: () => void, openPanel: boolean },
  ref: ForwardedRef<HTMLAnchorElement>
): ReactNode {

  return (
    <Box ref={ref}>

      <DrawerHelper
        openPanel={openPanel}
        handleClosePanel={handleClosePanel}
        title="Notifications"
      >

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
      </DrawerHelper>

    </Box>
  )
})
