import { Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { Stack } from "@mui/material";
import {type ReactNode} from "react";
import { DashboardPlane } from "./dashboard-plane";
import { SearchPlane } from './search-plane';
import { OverviewPlane } from "./overview-plane";
import { TrafficPlane } from "./traffic-plane";
import { LaboratoryTable } from "./laboratory-table";

export default function DashboardPage(): ReactNode {
  return (
    <Fragment>
      <Helmet>
        <title> Dashboard | LabTracka </title>
      </Helmet>

      <Stack p={3} gap={3}>
      <DashboardPlane />
      <SearchPlane />
      <OverviewPlane />
      <TrafficPlane />
      <LaboratoryTable />
      </Stack>
    </Fragment>
  )
}