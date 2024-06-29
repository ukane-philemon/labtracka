import { Dialog, Stack, Typography, useTheme } from "@mui/material";
import { type ReactNode } from "react";
import { IoIosWarning } from "react-icons/io";
import { StyledButton, StyleWarningButton } from "@components/styled";
import { WarningOption } from "@interface";

export const WarningDialog = ({
  content,
  open,
  handleClick,
}: {
  content: string | undefined;
  open: boolean;
  handleClick: (option: WarningOption) => void;
}): ReactNode => {
  const { palette } = useTheme();
  const white = palette.common.white;

  return (
    <Dialog
      onClose={() => {
        handleClick(WarningOption.No);
      }}
      open={open}
    >
      <Stack
        p={4.4}
        gap={0.5}
        sx={{
          height: "304px",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "357px",
          backgroundColor: palette.error.main,
          color: palette.common.white,
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <IoIosWarning size={50} />
          <Typography variant="h3">Warning!</Typography>
        </Stack>
        <Typography sx={{ textAlign: "center" }} variant="body2">
          {content}
        </Typography>
        <Stack direction="row" gap={3}>
          <StyleWarningButton
            onClick={() => {
              handleClick(WarningOption.Yes);
            }}
          >
            Yes
          </StyleWarningButton>

          <StyledButton
            onClick={() => {
              handleClick(WarningOption.No);
            }}
            variant="outlined"
            sx={{
              color: white,
              border: `1px solid ${white}`,
            }}
          >
            No
          </StyledButton>
        </Stack>
      </Stack>
    </Dialog>
  );
};
