// import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';


export default function BoxBasic() {
  return (
    <Box
    height={58}
    // width={996}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    p={3}
    sx={{
      borderRadius: '16px',
      padding: '17px 32px', // Corrected padding format
      backgroundColor: '#F9F9F9',
      mb: 5
    }}
    >
      <Box sx={{ paddingLeft: '20px' }} fontFamily="Open Sans">
        <h1>Approved Withdrawals</h1>
      </Box>
      <Box display='flex' alignItems='center' gap={2} sx={{ paddingRight: '20px' }}>
        <SvgIcon>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 10.666C24 8.54428 23.1571 6.50945 21.6569 5.00916C20.1566 3.50887 18.1217 2.66602 16 2.66602C13.8783 2.66602 11.8434 3.50887 10.3431 5.00916C8.84286 6.50945 8 8.54428 8 10.666C8 19.9993 4 22.666 4 22.666H28C28 22.666 24 19.9993 24 10.666Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.3067 28C18.0723 28.4041 17.7358 28.7395 17.331 28.9727C16.9262 29.2059 16.4672 29.3286 16 29.3286C15.5329 29.3286 15.0739 29.2059 14.6691 28.9727C14.2642 28.7395 13.9278 28.4041 13.6934 28" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </SvgIcon>
        <Avatar alt="Avatar" src="/static/images/avatar/1.jpg" />
      </Box>
    </Box>
  );
}
