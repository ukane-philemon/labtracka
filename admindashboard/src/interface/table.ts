import type {ChangeEvent, MouseEvent} from "react";
import type {SxProps} from "@mui/system";

export enum TableOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export enum ReplaceDeleteEnum {
  Report = 'report'
}
export interface TableOptions {
  hidePagination?: boolean
  replaceDelete?: ReplaceDeleteEnum
}

export interface HeadLabelParameters {
  id: string;
  label?: string;
  sx?: SxProps;
}

export enum ExtendedModelEnum {
  StudentResults = 'StudentResults',
}

export type TableContentType = string | number | boolean | undefined

// export type HandleTableEnum = AllModelsEnum | ExtendedModelEnum

// export type HandleTableTypes = AllModels | StudentResultsTable

export interface TableHeadParameters {
  order: TableOrder,
  orderBy: string,
  rowCount: number,
  headLabel: HeadLabelParameters[],
  numSelected: number,
  onRequestSort: (event: MouseEvent, id: string) => void,
  onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void
}