import { FormControl, Stack, TextField, Typography } from "@mui/material";
import { useState, type ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { LaboratoryTable } from "@pages/dashboard/laboratory-table";
import { StyledButton } from "@components/styled";
import { DrawerHelper } from "@components/helper";
import { SuccessDialog } from "@components/dialogs";

export default function LaboratoryPage(): ReactNode {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDrawer = (): void => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = (): void => {
    setOpenDrawer(false);
  };
  const handleOpenDialog = (): void => {
    handleCloseDrawer();
    setOpenDialog(true);
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
  };

  const title = "Laboratory";
  return (
    <>
      <Helmet>
        <title> {title} | LabTracka </title>
      </Helmet>

      <Stack gap={3}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5">{title}</Typography>
          <StyledButton onClick={handleOpenDrawer} variant="contained">
            <Typography>Add New Laboratory</Typography>
          </StyledButton>
        </Stack>
        <LaboratoryTable />

        <DrawerHelper
          openPanel={openDrawer}
          handleClosePanel={handleCloseDrawer}
          title="Add Laboratory"
        >
          <FormControl sx={{ height: "100%" }}>
            <Stack gap={2} pb={3} sx={{ flexGrow: 1 }}>
              <TextField label="State" size="small" />
              <TextField label="City" size="small" />
              <TextField label="Street Name" size="small" />
              <TextField label="Address Number" size="small" />
            </Stack>
            <StyledButton onClick={handleOpenDialog}>
              <Typography>Create Lab</Typography>
            </StyledButton>
          </FormControl>
        </DrawerHelper>

        <SuccessDialog
          content="Laboratory has been successfully added"
          open={openDialog}
          handleClose={handleCloseDialog}
        />
      </Stack>
    </>
  );
}
