"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function FooterPagination() {
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    // Handle the page change logic here
    console.log(`Page: ${value}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        borderTop: '1px solid #e0e0e0',
        backgroundColor: '#f9f9f9',
        marginTop: '20px',
        // width: '996px',
        height: '41px',
      }}
    >
      <Typography variant="body2" color="textSecondary" sx={{fontFamily: 'Open Sans', fontSize: '16px', fontWeight: '400'}}>
        Page 1 of 1
      </Typography>
      <Pagination
        count={1}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: NavigateBeforeIcon, next: NavigateNextIcon }}
            {...item}
          />
        )}
        onChange={handlePageChange}
      />
    </Box>
  );
}



 