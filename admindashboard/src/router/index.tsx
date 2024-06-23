import {lazy, type ReactElement, Suspense} from 'react';
import { Outlet, useRoutes } from "react-router-dom";
import { DrawerLayout } from '@layouts/dashboard';

export const DashboardPage = lazy(() => import('@pages/dashboard'));

export const Router = () : ReactElement | null => useRoutes([
  {
    element: (
      <DrawerLayout>
        <Suspense>
          <Outlet />
        </Suspense>
      </DrawerLayout>
    ),
    children: [
      { element: <DashboardPage />, index: true },
    ],
  }
])