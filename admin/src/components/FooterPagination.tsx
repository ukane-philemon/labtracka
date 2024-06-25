// import React from 'react'
import { Box } from '@mui/material'
import CustomSeparator from './CustomSeperator'
import TablePaginationDemo from './TablePaginationDemo'

const FooterPagination = () => {
  return (
        <Box 
        display='flex'
        alignItems='center'>
        <TablePaginationDemo />
        <CustomSeparator />
    </Box>
  )
}

export default FooterPagination

