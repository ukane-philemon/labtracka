import { Box, Paper, Stack, Typography } from "@mui/material"
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const TrafficByDevice = ({ width }: { width: number }): ReactNode => (
  <Paper elevation={3}>
    <Box p={2}>
      <Stack sx={{ alignItems: 'flex-start' }}><Typography variant="h6">Traffic by Device</Typography></Stack>
      <BarChart
        xAxis={[{
          scaleType: 'band',
          data: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Others'],
          colorMap: {
            type: 'ordinal',
            colors: ['#95A4FC', '#BAEDBD', '#00004D', '#D3EFFE', '#D7E3F2', 'rgba(0, 0, 77, 0.54)'],
          }
        }]}
        series={[{ data: [3, 2, 1, 2, 3, 4], type: "bar" }]}
        width={width}
        height={300}
        borderRadius={7}
        sx={{
          position: 'static'
        }}
      />
    </Box>
  </Paper>
)

const TrafficByLabLocation = ({ width }: { width: number }): ReactNode => (
  <Paper elevation={3}>
    <Box p={3}>
      <Typography variant="h6">Traffic by Lab  Location</Typography>
      <PieChart
        series={[
          {
            innerRadius: 60,
            outerRadius: 120,
            id: 'series-2',
            data: [
              { label: 'Port Harcourt', value: 38.6 },
              { label: 'Lagos', value: 22.5 },
              { label: 'Bayelsa', value: 30.8 },
              { label: 'Other', value: 8.1 },
            ],
            paddingAngle: 3,
            cornerRadius: 5,
          },
        ]}
        width={width}
        height={300}
        sx={{
          position: 'static'
        }}
      />
    </Box>
  </Paper>
)

export const TrafficPlane = (): ReactNode => {
  const ref = useRef(null);
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    setValue(ref.current ? ref.current.offsetWidth / 2 : 0)
  }, [])

  const actualWidth = value - 50
  return (
    <Stack direction='row' ref={ref}
      sx={{ justifyContent: "space-between" }}>

      <TrafficByDevice width={actualWidth} />
      <TrafficByLabLocation width={actualWidth} />
    </Stack>
  )
}