import { Box, Button, ClickAwayListener, IconButton, Input, InputAdornment, Slide } from "@mui/material";
import { useState } from "react";
import type { ReactNode } from "react";
import { MdSearch } from "react-icons/md";
import { StyledSearchbar } from "@components/styled";

export const SearchBar = (): ReactNode => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(!open);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box>
        {!open && (
          <IconButton onClick={handleOpen}>
            <MdSearch />
          </IconButton>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            <Input
              // eslint-disable-next-line jsx-a11y/no-autofocus -- this would not be a problem here
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <MdSearch color="#919EAB" size={20} />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </StyledSearchbar>
        </Slide>
      </Box>
    </ClickAwayListener>
  )
}