import { lazy, type ReactElement, Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { DrawerLayout } from '@layouts/dashboard';

export const DashboardPage = lazy(() => import('@pages/dashboard'));
export const AdminPage = lazy(() => import('@pages/admin'));
export const SettingsPage = lazy(() => import('@pages/settings'));
export const PaymentsPage = lazy(() => import('@pages/payments'));
export const Page404 = lazy(() => import('@pages/page-not-found'));

export const Router = (): ReactElement | null => useRoutes([
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
      { path: 'admin', element: <AdminPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'payments', element: <PaymentsPage /> },
    ],
  },
  {
    path: '404',
    element: <Page404 />,
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
])