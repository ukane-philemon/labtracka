// import Checkbox from '@mui/material/Checkbox';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import {Box, Typography} from '@mui/material';
// import type {MouseEvent, ReactNode} from "react";
// // import {visuallyHidden} from '@components/inputs';
// import type {TableHeadParameters} from "@interface";
// import {TableOrder} from "@interface";
// import {StyledTableCell} from '@components/styled'

// export function TableHeadProps(
//   {
//     order,
//     orderBy,
//     rowCount,
//     headLabel,
//     numSelected,
//     onRequestSort,
//     onSelectAllClick
//   }: TableHeadParameters): ReactNode {
//   const onSort = (property: string) => (event: MouseEvent): void => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <StyledTableCell padding='checkbox'>
//           <Checkbox
//             checked={rowCount > 0 && numSelected === rowCount}
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             onChange={onSelectAllClick}
//           />
//         </StyledTableCell>

//         {headLabel.map((headCell) => (
//           <StyledTableCell
//             align='center'
//             id={headCell.id}
//             key={headCell.id}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               hideSortIcon
//               onClick={onSort(headCell.id)}
//             >
//               <Typography>{headCell.label}</Typography>
//               {orderBy === headCell.id && (
//                 <Box sx={{...visuallyHidden}}>
//                   {order === TableOrder.DESC ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               )}
//             </TableSortLabel>
//           </StyledTableCell>
//         ))}
//         <StyledTableCell />
//       </TableRow>
//     </TableHead>
//   );
// }
