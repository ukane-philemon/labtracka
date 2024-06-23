import { Search, SearchIconWrapper, SearchInputBase, StyledButton } from "@components/styled";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { ExportStatsSuccessful } from "./export-stats-successful";

export const SearchPlane = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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