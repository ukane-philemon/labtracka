import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import type {ReactNode} from "react";



export function TableEmptyRows({ emptyRows, height }: {
    emptyRows: number, height: number
}): ReactNode {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows,
        }),
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
}
