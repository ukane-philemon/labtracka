import { Button, Dialog, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { ReactSVGHelper } from "@components/helper";
import successTick from '@assets/icons/success_tick.svg';

export const ExportStatsSuccessful = ({ onClose, open }: { onClose: () => void, open: boolean }) : ReactNode => {
  const handleClose = (): void => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <Stack p={4.4} gap={0.5} sx={{
        height: "304px",
        justifyContent: "center",
        alignItems: 'center',
        width: "357px"
      }}>
        <ReactSVGHelper height={95} src={successTick} width={105} />
        <Typography variant="h3" sx={{color: "rgba(0, 0, 77, 1)"}}>Success!</Typography>
        <Typography sx={{textAlign: 'center'}} variant="body2">Your grand report has been successfully downloaded, open your download to view on your device.</Typography>
        <Button variant="contained">
          <Typography variant="h6" sx={{width: "100%"}}>Close</Typography>
        </Button>
      </Stack>

    </Dialog>
  )
}