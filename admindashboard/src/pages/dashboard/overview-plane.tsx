import { BaseOverviewCard } from "@components/helper";
import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const OverviewPlane = () => {
  const [period, setPeriod] = useState("today");

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };
  return (
    <Stack gap={1}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Stack sx={{ alignItems: 'flex-start' }}><Typography variant="h5">Overview</Typography></Stack>
        <FormControl variant="standard">
          <Select defaultValue="today" sx={{'&::before, &::after': {borderBottom: 'unset'}}}>
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="last-week">Last Week</MenuItem>
            <MenuItem value="last-month">Last Month</MenuItem>
            <MenuItem value="last-year">Last Year</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      {/* <Stack direction="row" gap={2}> */}
      <Stack direction="row" sx={{justifyContent: 'space-around'}}>
        <BaseOverviewCard title="Total Users" content="1,012" subTitle="+11.02%" />
        <BaseOverviewCard title="Total Revenue" content="1,012" subTitle="+11.02%" isOdd={false} />
        <BaseOverviewCard title="Total Test Orders" content="100" subTitle="+11.02%" />
        <BaseOverviewCard title="Pending Orders" content="100" subTitle="+11.02%" isOdd={false} />
      </Stack>
    </Stack>
  )
}