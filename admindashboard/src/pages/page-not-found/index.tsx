import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";
import { NotFoundView } from "./not-found-view";

// ----------------------------------------------------------------------

export default function NotFoundPage(): ReactNode {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found </title>
      </Helmet>

      <NotFoundView />
    </>
  );
}
