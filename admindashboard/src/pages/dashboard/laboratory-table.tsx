import { ReactSVGHelper } from "@components/helper";
import { alpha, Box, IconButton, MenuItem, Paper, Popover, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

import editOutline from '@assets/icons/edit_outline.svg'

export const LaboratoryTable = () => {
  const now = new Date()
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'rgba(180, 163, 248, 0.14)',
      color: alpha(theme.palette.common.black, 0.85),
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color: alpha(theme.palette.common.black, 0.6),
    },
  }));
  return (
    <Box sx={{
      width: '100%',
      '& .actions': {
        color: 'text.secondary',
      },
      '& .textPrimary': {
        color: 'text.primary',
      },
    }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{backgroundColor: 'rgba(180, 163, 248, 0.14)'}}>
            <TableRow>
              {[
                { field: "labId", headerName: "Laboratory ID" },
                { field: "city", headerName: "City" },
                { field: "streetName", headerName: "Street Name" },
                { field: "addressNo", headerName: "Address Number", type: 'number' },
                { field: "dateCreated", headerName: "Date Created" },
                { field: "actions", headerName: "" },
              ].map(({ field, headerName }) => (
                <StyledTableCell key={field}>{headerName}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                id: 1,
                labId: "LMS001",
                city: "Port Harcourt",
                streetName: "John Wobo",
                addressNo: 50,
                dateCreated: now.toUTCString(),
              },
              {
                id: 2,
                labId: "LMS002",
                city: "Port Harcourt",
                streetName: "John Wobo",
                addressNo: 50,
                dateCreated: now.toUTCString(),
              },
            ].map(({ id, labId, city, streetName, addressNo, dateCreated }) => {
              const [open, setOpen] = useState<EventTarget | null>(null);

              const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
                setOpen(event.currentTarget);
              };

              const handleCloseMenu = () => {
                setOpen(null);
              };
              return (
                <Fragment key={id}>
                  <TableRow >
                    <StyledTableCell>{labId}</StyledTableCell>
                    <StyledTableCell>{city}</StyledTableCell>
                    <StyledTableCell>{streetName}</StyledTableCell>
                    <StyledTableCell>{addressNo}</StyledTableCell>
                    <StyledTableCell>{dateCreated}</StyledTableCell>
                    <StyledTableCell align='right'>
                      <IconButton onClick={handleOpenMenu}>
                        <SlOptionsVertical size={20} />
                      </IconButton>
                    </StyledTableCell>
                  </TableRow>
                  <Popover
                    open={!!open}
                    anchorEl={open as Element}
                    onClose={handleCloseMenu}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                      sx: { width: 120 },
                    }}
                  >
                    <MenuItem onClick={handleCloseMenu}>
                      <MdOutlineRemoveRedEye size={20} style={{ margin: '0 8px 0 0' }} />
                      View
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu}>
                      <ReactSVGHelper src={editOutline} margin='0 8px 0 0' />
                      {/* <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} /> */}
                      Edit
                    </MenuItem>

                    <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
                      <HiOutlineTrash size={20} style={{ color: 'red', margin: '0 8px 0 0' }} />

                      {/* <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} /> */}
                      Delete
                    </MenuItem>
                  </Popover>
                </Fragment>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}