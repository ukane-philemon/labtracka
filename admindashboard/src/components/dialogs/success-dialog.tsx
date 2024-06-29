import { Box, Dialog, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { StyledButton } from "@components/styled";
import successTick from '@assets/icons/success_tick.svg';

export const SuccessDialog = ({ content, open, handleClose }: {
  content: string, open: boolean, handleClose: () => void
}): ReactNode => (
  <Dialog onClose={handleClose} open={open} >
    <Stack p={4.4} gap={0.5} sx={{
      height: "304px",
      justifyContent: "center",
      alignItems: 'center',
      width: "357px"
    }}>
      <Box component="img" src={successTick} sx={{ width: 105, height: 95 }} />
      <Typography variant="h3" sx={{ color: "rgba(0, 0, 77, 1)" }}>Success!</Typography>
      <Typography sx={{ textAlign: 'center' }} variant="body2">{content}</Typography>
      <StyledButton onClick={handleClose} variant="contained" sx={{ width: "100%" }}>
        <Typography variant="h5" sx={{ width: "100%" }}>Close</Typography>
      </StyledButton>
    </Stack>
  </Dialog>
)