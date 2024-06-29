import { Box, Button, Container, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { RouterLink } from "@components/utils";
import { MockLogo } from "@mock";
import illustrations404 from "@assets/illustrations/illustration_404.svg";

export const NotFoundView = (): ReactNode => (
  <Box>
    <Box
      component="header"
      sx={{
        top: 0,
        left: 0,
        width: 1,
        lineHeight: 0,
        position: "fixed",
        p: (theme) => ({
          xs: theme.spacing(3, 3, 0),
          sm: theme.spacing(5, 5, 0),
        }),
      }}
    >
      <MockLogo />
    </Box>

    <Container>
      <Box
        sx={{
          py: 12,
          maxWidth: 480,
          mx: "auto",
          display: "flex",
          minHeight: "100vh",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ mb: 3 }}>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: "text.secondary" }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>

        <Box
          component="img"
          src={illustrations404}
          sx={{
            mx: "auto",
            height: 260,
            my: { xs: 5, sm: 10 },
          }}
        />

        <Button
          href="/"
          size="large"
          variant="contained"
          component={RouterLink}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  </Box>
);
