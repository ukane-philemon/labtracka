import { Box } from "@mui/material";
import { useState } from "react";
import type { ReactNode } from "react";
import Main from "./main";
import Nav from "./nav";
import Header from "./header";

export const DrawerLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  const [openNav, setOpenNav] = useState(false);

  const handleCloseNav = (): void => {
    setOpenNav(false);
  };

  const handleOpenNav = (): void => {
    setOpenNav(true);
  };

  //TODO: Refactor the header to be here

  return (
    <>
      <Header onOpenNav={handleOpenNav} />
      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Nav openNav={openNav} onCloseNav={handleCloseNav} />

        <Main>{children}</Main>
      </Box>
    </>
  );
};
