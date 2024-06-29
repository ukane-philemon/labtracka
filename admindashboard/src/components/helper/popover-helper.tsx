import { MenuItem, Popover, Stack } from "@mui/material";
import type { PopoverProps } from "@mui/material";
import type { ReactNode } from "react";
import { capitalizeFirstLetter } from "@components/utils";

export const PopoverHelper = ({ item, ...pop }: {
  pop: PopoverProps, open: boolean, item: {
    icon?: ReactNode,
    title: string,
    onClick: React.MouseEventHandler<HTMLLIElement>
    color?: string
  }[]
}): ReactNode => (
  <Popover {...pop} >
    {
      item.map(({ color, icon, title, onClick }) => (
        <MenuItem key={title} onClick={onClick} sx={{ color }}>
          <Stack direction="row" gap={1} sx={{ width: "100%" }}>
            {icon}
            {capitalizeFirstLetter(title)}
          </Stack>
        </MenuItem>
      ))
    }
  </Popover>
)