import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
    minWidth: "127px",
    minHeight: "43px",
    padding: `${theme.spacing(1.12)} ${theme.spacing(4.44)}`,
    whiteSpace: "nowrap"
}))