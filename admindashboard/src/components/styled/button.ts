import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
    height: "40px",
    padding: `${theme.spacing(1.12)} ${theme.spacing(4.44)}`,
    whiteSpace: "nowrap",
    backgroundColor: "rgba(0, 0, 77, 1)",
    borderRadius: "5px",
    color: "white",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "rgb(31 31 244)",
    }
}))