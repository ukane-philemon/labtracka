import {
  alpha,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  ListItemButton,
  MenuItem,
  NativeSelect,
  Paper,
  Popover,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from "@mui/x-charts/PieChart";
import { MdSearch } from "react-icons/md";
import {
  Search,
  SearchIconWrapper,
  SearchInputBase,
  StyledButton
} from "@components/styled";
import { MdMenu, MdOutlineRemoveRedEye } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { HiOutlineTrash } from "react-icons/hi";


import avatar from '@assets/image/avatar.png';
import adminAccount from '@assets/icons/admin_account.svg'
import cardPayment from '@assets/icons/card_payment.svg'
import doubleSlider from '@assets/icons/double_slider.svg'
import editOutline from '@assets/icons/edit_outline.svg'
import home from '@assets/icons/home.svg'
import notificationBell from '@assets/icons/notification_bell.svg'

import "@assets/stylesheets/App.css"
import { DRAWER_WIDTH } from '@components/constants';
import { BaseOverviewCard, ReactSVGHelper } from '@components/helper';
import { Fragment, MouseEvent, useState } from 'react';
import styled from '@mui/system/styled';

const AppBarPlane = ({ openDrawer, closeDrawerFunc }: { openDrawer: boolean, closeDrawerFunc: () => void }) => {

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      open={openDrawer} onClose={closeDrawerFunc}
      anchor="left"
    >
      <Stack pl={3} sx={{
        height: '102px',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <Typography variant='h6'>Peace Ewor</Typography>
        <Typography variant='body2'>admin.lab1@gmail.com</Typography>
      </Stack>
      <Divider />
      <Stack p={5} gap={2.5}>
        {[
          { id: 1, title: 'Dashboard', icon: <ReactSVGHelper src={home} /> },
          { id: 2, title: 'Admin', icon: <ReactSVGHelper src={adminAccount} /> },
          { id: 3, title: 'Payments', icon: <ReactSVGHelper src={cardPayment} /> },
          { id: 4, title: 'Settings', icon: <ReactSVGHelper src={doubleSlider} /> },
        ]
          .map(({ id, title, icon }) => (
            <Paper elevation={1} key={id} sx={{ backgroundColor: "rgba(0, 0, 77, 0.1)", height: 36, width: 204 }}>
              <Stack gap={2} sx={{ alignItems: 'flex-start', height: 'inherit', justifyContent: 'flex-start', width: 'inherit' }}>
                <ListItemButton key={id} sx={{ width: '100%', height: '100%' }}>
                  <Stack direction='row' gap={2}>
                    {icon}
                    <Typography variant='h6'>{title}</Typography>
                  </Stack>
                </ListItemButton>
              </Stack>
            </Paper>
          ))}

      </Stack>
    </Drawer>
  )
}

const DashboardPlane = ({ openDrawerFunc }: { openDrawerFunc: () => void }) => (
  // px={2.75} py={4}
  <Box mb={3} px={2} sx={{
    height: "68px",
    borderRadius: "16px",
    backgroundColor: "rgba(249, 249, 249, 1)"
  }}>
    <Stack direction='row' sx={{
      alignItems: 'center',
      height: "inherit",
      justifyContent: 'space-between'
    }}>
      <Stack direction='row' gap={2} sx={{ alignItems: 'center' }}>
        <IconButton onClick={openDrawerFunc}><MdMenu /></IconButton>
        <Typography variant='h5'>DashBoard</Typography>
      </Stack>
      <Stack direction='row' gap={2} sx={{ alignItems: 'center', height: '34px' }}>
        <IconButton>
          <ReactSVGHelper src={notificationBell} height={24} width={24} />
        </IconButton>
        <Divider orientation='vertical' variant='middle' />
        <IconButton>
          <img
            src={avatar}
            alt='avatar'
            height={34} width={34}
            style={{ borderRadius: '50%' }} />
        </IconButton>
      </Stack>
    </Stack>
  </Box>
)

const SearchPlane = () => (
  <Stack my={3} direction="row">
    <Search>
      <SearchIconWrapper>
        <MdSearch />
      </SearchIconWrapper>
      <SearchInputBase
        placeholder="Search for Laboratory  by name"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
    <StyledButton variant='contained'><Typography>Export Stats</Typography></StyledButton>
  </Stack>
)

const OverviewPlane = () => {
  const [period, setPeriod] = useState("today");

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };
  return (
    <Stack gap={1} my={3} py={3}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Stack sx={{ alignItems: 'flex-start' }}><Typography variant="h5">Overview</Typography></Stack>
        <FormControl variant="standard">
          <Select defaultValue="today" sx={{ '&::before, &::after': { borderBottom: 'unset' } }}>
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="last-week">Last Week</MenuItem>
            <MenuItem value="last-month">Last Month</MenuItem>
            <MenuItem value="last-year">Last Year</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      {/* <Stack direction="row" gap={2}> */}
      <Stack direction="row" sx={{ justifyContent: 'space-around' }}>
        <BaseOverviewCard title="Total Users" content="1,012" subTitle="+11.02%" />
        <BaseOverviewCard title="Total Revenue" content="1,012" subTitle="+11.02%" isOdd={false} />
        <BaseOverviewCard title="Total Test Orders" content="100" subTitle="+11.02%" />
        <BaseOverviewCard title="Pending Orders" content="100" subTitle="+11.02%" isOdd={false} />
      </Stack>
    </Stack>
  )
}

const TrafficByDevice = () => (
  <Paper elevation={3}>
    <Box p={2}>
      <Stack sx={{ alignItems: 'flex-start' }}><Typography variant="h6">Traffic by Device</Typography></Stack>
      <BarChart
        xAxis={[{
          scaleType: 'band',
          data: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Others'],
          colorMap: {
            type: 'ordinal',
            colors: ['#95A4FC', '#BAEDBD', '#00004D', '#D3EFFE', '#D7E3F2', 'rgba(0, 0, 77, 0.54)'],
          }
        }]}
        series={[{ data: [3, 2, 1, 2, 3, 4], type: "bar" }]}
        width={500}
        height={300}
        borderRadius={7}
      />
    </Box>
  </Paper>
)

const TrafficByLabLocation = () => (
  <Paper elevation={3}>
    <Box p={3}>
      <Typography variant="h6">Traffic by Lab  Location</Typography>
      <PieChart
        series={[
          {
            innerRadius: 60,
            outerRadius: 120,
            id: 'series-2',
            data: [
              { label: 'Port Harcourt', value: 38.6 },
              { label: 'Lagos', value: 22.5 },
              { label: 'Bayelsa', value: 30.8 },
              { label: 'Other', value: 8.1 },
            ],
            paddingAngle: 3,
            cornerRadius: 5,
          },
        ]}
        width={500}
        height={300}
      />
    </Box>
  </Paper>
)

const TrafficPlane = () => (
  // <Stack direction='row' my={3} gap={3.5}>
  <Stack direction='row' my={3} sx={{ justifyContent: "space-around" }}>
    <TrafficByDevice />
    <TrafficByLabLocation />
  </Stack>
)

const LaboratoryTable = () => {
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
          <TableHead sx={{ backgroundColor: 'rgba(180, 163, 248, 0.14)' }}>
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
                labId: "LMS001",
                city: "Port Harcourt",
                streetName: "John Wobo",
                addressNo: 50,
                dateCreated: now.toUTCString(),
              },
              {
                labId: "LMS002",
                city: "Port Harcourt",
                streetName: "John Wobo",
                addressNo: 50,
                dateCreated: now.toUTCString(),
              },
            ].map(({ labId, city, streetName, addressNo, dateCreated }) => {
              const [open, setOpen] = useState<HTMLButtonElement | null>(null);

              const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
                setOpen(event.currentTarget);
              };

              const handleCloseMenu = () => {
                setOpen(null);
              };

              return (
                <TableRow key={labId} id={labId}>
                  <StyledTableCell>{labId}</StyledTableCell>
                  <StyledTableCell>{city}</StyledTableCell>
                  <StyledTableCell>{streetName}</StyledTableCell>
                  <StyledTableCell>{addressNo}</StyledTableCell>
                  <StyledTableCell>{dateCreated}</StyledTableCell>
                  <StyledTableCell align='right'>
                    <IconButton onClick={handleOpenMenu} key={labId}>
                      <SlOptionsVertical size={20} />
                    </IconButton>
                  </StyledTableCell>
                  <Popover
                    anchorEl={open}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    onClose={handleCloseMenu}
                    open={Boolean(open)}
                    PaperProps={{
                      sx: { width: 120 },
                    }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    <MenuItem onClick={handleCloseMenu}>
                      <MdOutlineRemoveRedEye size={20} style={{ margin: '0 8px 0 0' }} />
                      View
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu}>
                      <ReactSVGHelper src={editOutline} margin='0 8px 0 0' />
                      Edit
                    </MenuItem>

                    <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
                      <HiOutlineTrash size={20} style={{ color: 'red', margin: '0 8px 0 0' }} />
                      Delete
                    </MenuItem>
                  </Popover>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <Box p={3} sx={{ backgroundColor: "#F1F4F9" }}>
      <CssBaseline />
      <AppBarPlane openDrawer={openDrawer} closeDrawerFunc={handleDrawerClose} />
      <DashboardPlane openDrawerFunc={handleDrawerOpen} />
      <SearchPlane />
      <OverviewPlane />
      <TrafficPlane />
      <LaboratoryTable />
    </Box>
  )
}

export default App
