import { Paper, Stack, Typography } from "@mui/material";
import { type ReactNode } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

export const BaseOverviewCard = ({
  title,
  content,
  subTitle,
  isOdd = true,
}: {
  title: string;
  content: string;
  subTitle: string;
  isOdd?: boolean;
}): ReactNode => (
  <Paper
    elevation={3}
    sx={{
      alignItems: "center",
      backgroundColor: isOdd
        ? "rgba(211, 239, 254, 1)"
        : "rgba(215, 227, 242, 1)",
      borderRadius: "16px",
      display: "flex",
      height: "125px",
      justifyContent: "center",
      width: "240px",
    }}
  >
    <Stack direction="column" gap={1} sx={{ alignItems: "flex-start" }}>
      <Typography variant="caption">{title}</Typography>
      <Stack
        direction="row"
        gap={4}
        sx={{
          justifyContent: "space-between",
          width: "191px",
        }}
      >
        <Typography variant="h4">{content}</Typography>
        <Stack
          direction="row"
          gap={0.5}
          sx={{
            alignItems: "flex-end",
            paddingBottom: "10px",
          }}
        >
          <Typography variant="caption">{subTitle}</Typography>
          <FaArrowTrendUp />
        </Stack>
      </Stack>
    </Stack>
  </Paper>
);
