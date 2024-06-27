import { Box } from "@mui/material";
import { useState, type ReactNode } from "react";
import Main from "./main";
import Nav from "./nav";



export const DrawerLayout = ({ children }: { children: ReactNode }) => {
  const [openNav, setOpenNav] = useState(false);

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

  // return (
  //   // px={2.75} py={4}
  //   <Box mb={3} px={2} sx={{
  //     height: "68px",
  //     borderRadius: "16px",
  //     backgroundColor: "rgba(249, 249, 249, 1)"
  //   }}>
  //     <Stack direction='row' sx={{
  //       alignItems: 'center',
  //       height: "inherit",
  //       justifyContent: 'space-between'
  //     }}>
  //       <Stack direction='row' gap={2} sx={{ alignItems: 'center' }}>
  //         <IconButton onClick={openDrawerFunc}><MdMenu /></IconButton>
  //         <Typography variant='h5'>DashBoard</Typography>
  //       </Stack>
  //       <Stack direction='row' gap={2} sx={{ alignItems: 'center', height: '34px' }}>
  //         <IconButton>
  //           <ReactSVGHelper src={notificationBell} height={24} width={24} />
  //         </IconButton>
  //         <Divider orientation='vertical' variant='middle' />
  //         <IconButton>
  //           <img
  //             src={avatar}
  //             alt='avatar'
  //             height={34} width={34}
  //             style={{ borderRadius: '50%' }} />
  //         </IconButton>
  //       </Stack>
  //     </Stack>
  //   </Box>
  // )
}
