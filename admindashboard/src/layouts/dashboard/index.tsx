import { Box } from "@mui/material";
import { useState } from "react";
import type { ReactNode } from 'react';
import Main from "./main";
import Nav from "./nav";



export const DrawerLayout = ({ children }: { children: ReactNode }): ReactNode => {
  const [openNav, setOpenNav] = useState(false);

  //TODO: Refactor the header to be here

  return (
    <Box
      sx={{
        minHeight: 1,
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
      }}
    >
      <Nav openNav={openNav} onCloseNav={() => { setOpenNav(false); }} />

      <Main>{children}</Main>
    </Box>
  )
}
