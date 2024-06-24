"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { NAV_LINKS, USER_INFO } from '../constants/Navigation';
import { styled } from '@mui/material/styles'; // Import styled from MUI styles
import ResponsiveGrid from './ResponsiveGrid';
import BoxBasic from './BoxBasic';
import BasicMenu from './BasicMenu';

// Import SVGs as React components

// import { ReactComponent as DashboardIcon } from "Home.svg";
// import { ReactComponent as TestIcon } from '../public/icons/test.svg';
// import { ReactComponent as OrderIcon } from '../public/icons/order.svg';
// import { ReactComponent as ResultIcon } from '../public/icons/result.svg';
// import { ReactComponent as PaymentIcon } from '../public/icons/wallet.svg';
// import { ReactComponent as SettingsIcon } from '../public/icons/settings.svg';

// const iconMap: { [key: string]: React.ElementType } = {
//   dashboard: DashboardIcon,
//   test: TestIcon,
//   order: OrderIcon,
//   result: ResultIcon,
//   payment: PaymentIcon,
//   settings: SettingsIcon,
// };

// Define a styled component for ListItemText to adjust typography
const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontSize: '14px', 
    fontWeight: '600',
    fontFamily: 'Open Sans',
    color: '#777777'
  },
}));

const drawerWidth = 284;

export default function TemporaryDrawer() {
  const DrawerList = (
    <Box sx={{ width: 204, height: 296}} role="presentation">
      <Divider sx={{width: '318', margin: '0px'}} />
      <List sx={{paddingTop: '20px'}}>
        {NAV_LINKS.map((link) => (
          <ListItem key={link.key}>
            <ListItemButton component='a' href={link.href}  >
              <ListItemIcon>
                {/* {React.createElement(iconMap[link.key], { width: 22, height: 22 })} we will come back to this */}
              </ListItemIcon>
              <StyledListItemText primary={link.label}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex'}}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', padding: '8px 16px' },
        }}
        >
        
          {USER_INFO.map((user, index) => (
            <div key={user.key} className={index === 0 ? 'first-user-info' :'second-user-info'}  style={{
          padding:index === 0 ? '20px 10px 0px 16px' : '0px 10px 16px 16px', // Add your desired padding value here
          fontSize: index === 0 ? '16px' : '14px',
          fontWeight: index === 0 ? '600' : 'normal',
          fontFamily: 'Open Sans',
          color: index === 0 ? 'inherit' : '#777777'
         }}>{user.label}</div>
          ))}
        
        {DrawerList}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Main content goes here */}
        <BoxBasic />
        <BasicMenu />
        <ResponsiveGrid />
      </Box>
    </Box>
  );
}
