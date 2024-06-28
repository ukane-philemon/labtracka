import type { ReactNode } from "react";

export interface NavParameter {
  icon: ReactNode;
  path: string;
  title: string;
}

export enum Query {
  Up = 1,
  Down = 2,
  Between = 3
}