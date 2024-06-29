import type { SxProps } from "@mui/system";
import type { AllModels, AllModelsEnum } from "./models";

export type Comparator = -1 | 1 | 0;

export enum TableOrder {
  ASC = "asc",
  DESC = "desc",
}

export enum ReplaceDeleteEnum {
  Report = "report",
}
export interface TableOptions {
  hidePagination?: boolean;
  replaceDelete?: ReplaceDeleteEnum;
}

export interface HeadLabelParameters {
  id: string;
  label?: string;
  sx?: SxProps;
  hide: boolean;
  edit: boolean;
}

export enum ExtendedModelEnum {
  StudentResults = "StudentResults",
}

export type TableContentType = string | number | boolean | undefined;

export type HandleTableEnum = AllModelsEnum;

export type HandleTableTypes = AllModels;
