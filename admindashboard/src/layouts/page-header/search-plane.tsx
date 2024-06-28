import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { MdSearch } from "react-icons/md";
import {
  Search,
  SearchIconWrapper,
  SearchInputBase,
  StyledButton
} from "@components/styled";

export const SearchPlane = ({
  title, buttonTitle, buttonClick, other
}: {
  title: string,
  buttonTitle: string,
  buttonClick: () => void,
  other: ReactNode
}): ReactNode => {


  return (
    <Stack direction="row">
      <Search>
        <SearchIconWrapper>
          <MdSearch />
        </SearchIconWrapper>
        <SearchInputBase
          placeholder={`Search for ${title}  by name`}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <StyledButton onClick={buttonClick} variant='contained'>
        <Typography>{buttonTitle}</Typography>
      </StyledButton>
      {other}
    </Stack>
  )
}