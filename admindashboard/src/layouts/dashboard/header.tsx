import { AppBar, Avatar, Box, Divider, IconButton, Stack, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { MdSearch } from "react-icons/md";
import { useResponsive } from "@components/hooks";
import { HEADER, NAV } from "@components/constants";
import { BgBlur } from "@components/theme";
import notificationBell from '@assets/icons/notification_bell.svg'
import { mockAccount } from "@mock";
import { SearchBar } from "./common/search-bar";
import { NotificationPanel } from "./notification-panel";


export default function Header({ onOpenNav }: { onOpenNav: () => void }): ReactNode {
  const [openNotification, setOpenNotification] = useState<boolean>(false)
  const handleOpenNotification = (): void => {
    setOpenNotification(true);
  };
  const handleCloseNotification = (): void => {
    setOpenNotification(false);
  };
  const lgUp = useResponsive('up', 'lg');
  const theme = useTheme();
  const myRef = useRef(null);

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...BgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${(NAV.WIDTH + 1).toString()}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}>
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {!lgUp && (
          <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
            <MdSearch />
          </IconButton>
        )}

        <SearchBar />

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction='row' gap={2} sx={{ alignItems: 'center', height: '34px' }}>
          <IconButton onClick={handleOpenNotification}>
            <Box
              component="img"
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

      </Toolbar>
      <NotificationPanel
        handleClosePanel={handleCloseNotification}
        ref={myRef} openPanel={openNotification}
      />
    </AppBar>
  )
}