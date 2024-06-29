// src/components/EnhancedTable.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
// import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import { visuallyHidden } from '@mui/utils';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import RequestButton from './RequestButton';
import SuccessPopover from './SuccessPopover';

// Define the Data interface
interface Data {
  invoiceId: string;
  amount: number;
  charges: number;
  payment: number;
  date: string;
}

// Function to create data
function createData(
  invoiceId: string,
  amount: number,
  charges: number,
  payment: number,
  date: string,
): Data {
  return {
    invoiceId,
    amount,
    charges,
    payment,
    date,
  };
}

// SAMPLE
const rows = [
  createData('ORDER001', 5000, 0.00, 5000, "31/08/2023"),
  createData('ORDER002', 5000, 0.00, 5000, "12/08/2023"),
  createData('ORDER003', 5000, 0.00, 5000, "2/08/2023"),
  createData('ORDER004', 5000, 0.00, 5000, "11/08/2023"),
  createData('ORDER005', 5000, 0.00, 5000, "22/08/2023"),
  createData('ORDER006', 5000, 0.00, 5000, "23/08/2023"),
  createData('ORDER007', 5000, 0.00, 5000, "25/08/2023"),
  createData('ORDER008', 5000, 0.00, 5000, "30/08/2023"),
  createData('ORDER009', 5000, 0.00, 5000, "12/08/2023"),
  createData('ORDER0010', 5000, 0.00, 5000, "12/08/2023"),
  createData('ORDER0011', 5000, 0.00, 5000, "14/08/2023"),
  createData('ORDER0012', 5000, 0.00, 5000, "17/08/2023"),
  createData('ORDER0013', 5000, 0.00, 5000, "20/08/2023"),
];

// Function for descending comparator
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

// Function to get comparator
function getComparator<Key extends keyof unknown>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Stable sort function
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// Define the head cell interface
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

// Head cells for the table
const headCells: readonly HeadCell[] = [
  {
    id: 'invoiceId',
    numeric: false,
    disablePadding: true,
    label: 'Invoice ID',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: 'Amount',
  },
  {
    id: 'charges',
    numeric: true,
    disablePadding: false,
    label: 'Charges',
  },
  {
    id: 'payment',
    numeric: true,
    disablePadding: false,
    label: 'Payment',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },
];

// Define the EnhancedTableProps interface
interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

// EnhancedTableHead component
function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead sx={{backgroundColor: '#B4A3F824'}}>
      <TableRow>
        <TableCell/>
        {headCells.map((headCell) => (
          <TableCell
            height={64}
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{fontSize: '16px', color: '#1A1A1A', fontWeight: '600', fontFamily: 'Open Sans', paddingX: '10px'}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{paddingX: '100px'}}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(value);
}

function FooterPagination(props: { count: number; page: number; rowsPerPage: number; onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void; }) {
  const { count, page, rowsPerPage, onPageChange } = props;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 16px 0px 16px', fontSize: '16px', fontFamily: 'Open Sans'}}>
      <Box>
        Page {page + 1} of {Math.ceil(count / rowsPerPage)}
      </Box>
      <Box>
        <IconButton
          onClick={(event) => onPageChange(event, page - 1)}
          disabled={page === 0}
          aria-label="previous page"
          sx={{fontSize: '18px'}}
        >
          <KeyboardArrowLeft />
          Previous
        </IconButton>
        <IconButton
          onClick={(event) => onPageChange(event, page + 1)}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
          sx={{fontSize: '18px'}}
        >
          Next
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('invoiceId');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.invoiceId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else if (selectedIndex === 0) {
      newSelected = selected.slice(1);
    } else if (selectedIndex === selected.length - 1) {
      newSelected = selected.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(newSelected);

    // Show the popover
    if (newSelected.length > selected.length) {
      setAnchorEl(event.currentTarget);
      setPopoverOpen(true);
      setTimeout(() => {
        setPopoverOpen(false);
      }, 2000);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const visibleRows = stableSort<Data>(
    rows,
    getComparator(order, orderBy),
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ width: '100%', paddingTop: '70px' }}>
      <Paper sx={{ width: '100%', mb: 10 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.invoiceId);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.invoiceId)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.invoiceId}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer', height: '80px'}}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.invoiceId}
                    </TableCell>
                    <TableCell align="right">{formatCurrency(row.amount)}</TableCell>
                    <TableCell align="right">{formatCurrency(row.charges)}</TableCell>
                    <TableCell align="right">{formatCurrency(row.payment)}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <RequestButton />
        </Box>
       <Box>
         <FooterPagination
          count={rows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
        />
       </Box>
       
      <SuccessPopover 
        anchorEl={anchorEl}
        onClose={() => setPopoverOpen(false)}
        open={popoverOpen}
      />
    </Box>
  );
}
