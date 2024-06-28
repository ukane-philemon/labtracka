import { Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { Button, Dialog, Stack, Typography } from "@mui/material";
import { useState, type ReactNode } from "react";
import { PageHeader } from "@layouts/page-header";
import { ReactSVGHelper } from "@components/helper";
import successTick from '@assets/icons/success_tick.svg';
import { OverviewPlane } from "./overview-plane";
import { TrafficPlane } from "./traffic-plane";
import { LaboratoryTable } from "./laboratory-table";

export default function DashboardPage(): ReactNode {

  const [open, setOpen] = useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const dialogBox = (
    <Dialog onClose={handleClose} open={open} >
      <Stack p={4.4} gap={0.5} sx={{
        height: "304px",
        justifyContent: "center",
        alignItems: 'center',
        width: "357px"
      }}>
        <ReactSVGHelper height={95} src={successTick} width={105} />
        <Typography variant="h3" sx={{ color: "rgba(0, 0, 77, 1)" }}>Success!</Typography>
        <Typography sx={{ textAlign: 'center' }} variant="body2">Your grand report has been successfully downloaded, open your download to view on your device.</Typography>
        <Button onClick={handleClose} variant="contained">
          <Typography variant="h6" sx={{ width: "100%" }}>Close</Typography>
        </Button>
      </Stack>
    </Dialog>
  )

  return (
    <Fragment>
      <Helmet>
        <title> Dashboard | LabTracka </title>
      </Helmet>

      <Stack p={3} gap={3}>
        <PageHeader title="Dashboard" buttonTitle="Export Stats" buttonClick={handleClickOpen} other={dialogBox} />
        <OverviewPlane />
        <TrafficPlane />
        <LaboratoryTable />
      </Stack>
    </Fragment>
  )
}