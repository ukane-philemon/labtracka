// import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Stack, Typography } from "@mui/material";
import { useState, type ReactNode } from "react";
import { StyledButton } from "@components/styled";
import { SuccessDialog } from "@components/dialogs";
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

  const title = "Dashboard";

  return (
    <>
      <Helmet>
        <title> {title} | LabTracka </title>
      </Helmet>

      <Stack gap={3}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5">{title}</Typography>
          <StyledButton onClick={handleClickOpen}>Export Stats</StyledButton>
        </Stack>
        <OverviewPlane />
        <TrafficPlane />
        <LaboratoryTable />

        <SuccessDialog
          content="Your grand report has been successfully downloaded, open your download to view on your device."
          handleClose={handleClose}
          open={open}
        />
      </Stack>
    </>
  );
}
