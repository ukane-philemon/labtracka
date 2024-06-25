
"use client"
// import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#D3EFFE',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'start',
  color: theme.palette.text.secondary,
  borderRadius: '16px'
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={2} sm={2} md={3} key={index}>
            <Item>xs=3</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
