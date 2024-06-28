import { IconButton, Typography, Avatar, Divider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { type ReactNode, useState, useRef } from "react";
import { MdMenu } from "react-icons/md";
import notificationBell from '@assets/icons/notification_bell.svg'
import { NotificationPanel } from "@pages/dashboard/notification-panel";
import { mockAccount } from "@mock";

export const DashboardPlane = ({title}: {title: string}): ReactNode => {
  const [openPanel, setOpenPanel] = useState<boolean>(false)
  const handleOpenPanel = (): void => {
    setOpenPanel(true);
  };
  const handleClosePanel = (): void => {
    setOpenPanel(false);
  };

  const myRef = useRef(null);

  return (
    <Box sx={{
      height: "68px",
      borderRadius: "16px",
      backgroundColor: "rgba(249, 249, 249, 1)"
    }}>
      <Stack direction='row' sx={{
        alignItems: 'center',
        height: "inherit",
        justifyContent: 'space-between'
      }}>
        <Stack direction='row' gap={2} sx={{ alignItems: 'center' }}>
          <IconButton onClick={() => {
            console.log("Open");
          }}><MdMenu /></IconButton>
          <Typography variant='h5'>{title}</Typography>
        </Stack>
        <Stack direction='row' gap={2} sx={{ alignItems: 'center', height: '34px' }}>
          <IconButton
            onClick={handleOpenPanel}>
            <Avatar
              alt="Notification Bell SVG"
              src={notificationBell}
              sx={{ width: 24, height: 24 }}
            />
          </IconButton>
          <Divider orientation='vertical' variant='middle' />
          <IconButton>
            <Avatar
              alt="photoURL"
              src={mockAccount.photoURL}
              sx={{ width: 34, height: 34 }}
            />
          </IconButton>
        </Stack>
      </Stack>
      <NotificationPanel handleClosePanel={handleClosePanel} ref={myRef} openPanel={openPanel} />
    </Box>
  )
}