import {Avatar, Box, Divider, IconButton, Stack, Typography} from "@mui/material";
import {MdMenu} from "react-icons/md";
import notificationBell from '@assets/icons/notification_bell.svg'
import {account} from "@mock";
import type {ReactNode} from "react";

export const DashboardPlane = (): ReactNode => (
  // px={2.75} py={4}
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
      <Stack direction='row' gap={2} sx={{alignItems: 'center'}}>
        <IconButton onClick={() => console.log("Open")}><MdMenu/></IconButton>
        <Typography variant='h5'>DashBoard</Typography>
      </Stack>
      <Stack direction='row' gap={2} sx={{alignItems: 'center', height: '34px'}}>
        <IconButton>
          <Avatar
            alt="Notification Bell SVG"
            src={notificationBell}
            sx={{width: 24, height: 24}}
          />
        </IconButton>
        <Divider orientation='vertical' variant='middle'/>
        <IconButton>
          <Avatar
            alt="photoURL"
            src={account.photoURL}
            sx={{width: 34, height: 34}}
          />
        </IconButton>
      </Stack>
    </Stack>
  </Box>
)