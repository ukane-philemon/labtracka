import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// ----------------------------------------------------------------------

export function usePathname(): string {
  const { pathname } = useLocation();

  return useMemo(() => pathname, [pathname]);
}
