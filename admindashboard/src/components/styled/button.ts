import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme, variant = "contained" }) => {
  const { palette } = theme
  return ({
    height: "40px",
    padding: `${theme.spacing(1.12)} ${theme.spacing(4.44)}`,
    whiteSpace: "nowrap",
    fontSize: "16px",
    borderRadius: "7px",
    backgroundColor: variant === "contained" ? palette.primary.main : undefined,
    color: variant === "contained" ? "white" : undefined,
    "&:hover": {
      backgroundColor: variant === "contained" ? palette.action.hover : undefined,
    }
  })
})

export const StyleWarningButton = styled(StyledButton)(({ theme }) => {
  const { palette } = theme
  return ({
    backgroundColor: palette.common.white,
    color: palette.error.main,
    "&:hover": {
      backgroundColor: palette.error.light,
    }
  })
})