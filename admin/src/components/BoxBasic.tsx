"use client"
// import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';

function MySvgIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function BoxBasic() {
  return (
    <Box
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={3}
      sx={{ border: '2px solid grey' }}
    >
        <div className="">
            <h1>Approved Withdrawals</h1>
        </div>

        <div className="flex" >
            <div className="">
                <MySvgIcon />
            </div>
            <div className="">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
        </div>
    </Box>
  );
}
