import { Fragment } from "react/jsx-runtime";
import type { ReactNode } from "react";
import { DashboardPlane } from "./dashboard-plane";
import { SearchPlane } from "./search-plane";

export const PageHeader = ({
  title, buttonTitle, buttonClick, other
}: {
  title: string,
  buttonTitle: string,
  buttonClick: () => void,
  other: ReactNode
}): ReactNode => (
  <Fragment>
    <DashboardPlane title={title} />
    <SearchPlane
      title={title}
      buttonTitle={buttonTitle}
      buttonClick={buttonClick}
      other={other}
    />
  </Fragment>
)