import { styled } from "@mui/material/styles";
import { alpha, TableCell, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(180, 163, 248, 0.14)",
    color: alpha(theme.palette.common.black, 0.85),
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: alpha(theme.palette.common.black, 0.6),
  },
}));
