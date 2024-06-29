import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

export const StyledSvgBox = styled(Box)(({ src }: { src: string }) => ({
  component: "img",
  src,
}))