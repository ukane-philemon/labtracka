import { Search, SearchIconWrapper, SearchInputBase, StyledButton } from "@components/styled";
import { Stack, Typography } from "@mui/material";
import { MdSearch } from "react-icons/md";

export const SearchPlane = () => (
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
    <StyledButton variant='contained'><Typography>Export Stats</Typography></StyledButton>
  </Stack>
)