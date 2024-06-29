import { forwardRef } from "react";
import type { ForwardedRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import type { To } from "react-router-dom";

// ----------------------------------------------------------------------

export const RouterLink = forwardRef(function RouterLinkForwardRef(
  { href, ...other }: { href: To },
  ref: ForwardedRef<HTMLAnchorElement>,
): ReactNode {
  return <Link ref={ref} to={href} {...other} />;
});
