import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import type { ReactNode } from "react";
import { MdSearch } from "react-icons/md";
import { Search, SearchIconWrapper, SearchInputBase, StyledButton } from "@components/styled";
import { ExportStatsSuccessful } from "./export-stats-successful";

export const SearchPlane = (): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      <Search>
        <SearchIconWrapper>
          <MdSearch />
        </SearchIconWrapper>
        <SearchInputBase
          placeholder="Search for Laboratory  by name"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <StyledButton onClick={handleClickOpen} variant='contained'><Typography>Export Stats</Typography></StyledButton>
      <ExportStatsSuccessful onClose={handleClose} open={open} />
    </Stack>
  )
}