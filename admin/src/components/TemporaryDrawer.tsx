"use client";
// import React from 'react';
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
import EnhancedTable from './EnhancedTable';
import dashboardIcon from '../assets/Home.svg';
import testIcon from '../assets/test.svg';
import orderIcon from '../assets/order.svg';
import resultIcon from '../assets/result.svg';
import paymentIcon from '../assets/wallet.svg';
import settingIcon from '../assets/settings.svg';

const iconMap: { [key: string]: string } = {
  dashboardIcon,
  testIcon,
  orderIcon,
  resultIcon,
  paymentIcon,
  settingIcon,
};

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
                <img src={iconMap[link.key]} width={22} height={22} />
              </ListItemIcon>
              <StyledListItemText primary={link.label}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#F1F4F9'}}>
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
          padding:index === 0 ? '20px 10px 0px 16px' : '0px 10px 16px 16px', 
          fontSize: index === 0 ? '16px' : '14px',
          fontWeight: index === 0 ? '600' : 'normal',
          fontFamily: 'Open Sans',
          color: index === 0 ? 'inherit' : '#777777'
         }}>{user.label}</div>
          ))}
        
        {DrawerList}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
        <BoxBasic />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <BasicMenu />
        </Box>
        <ResponsiveGrid />
        <EnhancedTable />
      </Box>
    </Box>
  );
}
