import { useEffect } from 'react';
import {
  Box, Divider, Drawer,
  ListItemButton, Stack, Typography
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { usePathname, useResponsive } from '@components/hooks';
import { NAV } from '@components/constants';
import { AccountDesignation, type NavParameter } from '@interface';
import { RouterLink } from '@utils';
import { navConfig } from './config-navigation';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }: { openNav: boolean, onCloseNav: () => void }) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderAccount = (
    <Stack px={5} sx={{
      height: '102px',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <Typography variant='h6'>Peace Ewor</Typography>
      <Typography variant='body2'>admin.lab1@gmail.com</Typography>
    </Stack>
  );

  const renderMenu = (
    <Stack component="nav" gap={2.5} py={5} px={4}>
      {navConfig(AccountDesignation.Admin).map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Stack>

      {renderAccount}
      <Divider />
      {renderMenu}

    </Stack>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

function NavItem({ item }: { item: NavParameter }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}
