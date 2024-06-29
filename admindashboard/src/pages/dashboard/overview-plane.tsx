import {
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import type { ReactNode } from "react";
import { Scrollbar } from "@components/scrollbar";
import { BaseOverviewCard } from "./common/base-overview-card";

export const OverviewPlane = (): ReactNode => {
  const [period, setPeriod] = useState("today");

  const handleChange = (event: SelectChangeEvent): void => {
    setPeriod(event.target.value);
  };
  return (
    <Stack gap={1}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Stack sx={{ alignItems: "flex-start" }}>
          <Typography variant="h6">Overview</Typography>
        </Stack>
        <FormControl variant="standard">
          <Select
            defaultValue="today"
            sx={{ "&::before, &::after": { borderBottom: "unset" } }}
          >
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="last-week">Last Week</MenuItem>
            <MenuItem value="last-month">Last Month</MenuItem>
            <MenuItem value="last-year">Last Year</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Scrollbar>
        <Stack direction="row" gap={2} sx={{ justifyContent: "space-around" }}>
          <BaseOverviewCard
            title="Total Users"
            content="1,012"
            subTitle="+11.02%"
          />
          <BaseOverviewCard
            title="Total Revenue"
            content="1,012"
            subTitle="+11.02%"
            isOdd={false}
          />
          <BaseOverviewCard
            title="Total Test Orders"
            content="100"
            subTitle="+11.02%"
          />
          <BaseOverviewCard
            title="Pending Orders"
            content="100"
            subTitle="+11.02%"
            isOdd={false}
          />
        </Stack>
      </Scrollbar>
    </Stack>
  );
};
