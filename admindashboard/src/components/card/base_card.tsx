import { Box, Card, CardContent, Paper, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { FaArrowTrendUp } from "react-icons/fa6";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "240px",
  height: "125px",
  padding: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
  ...theme.typography.body2,
}));

export function BaseCard({ title, content, subTitle, isOdd }: { title: string, content: string, subTitle: string, isOdd?: boolean }) {

  return (
    <Paper elevation={3} sx={{
      width: "240px",
      height: "125px",
      // padding: theme.spacing(1.5),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "16px",
      // ...theme.typography.body2,
    }}>
      <Stack direction="column" gap={1}>
        <Typography variant="caption">{title}</Typography>
        <Stack direction="row" gap={4} sx={{
          justifyContent: "space-between"
        }}>
          <Typography variant="h3">{content}</Typography>
          <Stack direction="row" gap={0.5} sx={{
            alignItems: "flex-end", paddingBottom: "10px"
          }}>
            <Typography variant="caption">{subTitle}</Typography>
            <FaArrowTrendUp />
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}

// sx={{
//   // backgroundColor: isOdd ? "#D3EFFE" : "#D7E3F2",
//   // borderRadius: "16px",

// }}