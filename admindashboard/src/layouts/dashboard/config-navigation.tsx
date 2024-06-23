import { AccountDesignation, NavParameter } from '@interface';
import adminAccount from '@assets/icons/admin_account.svg'
import cardPayment from '@assets/icons/card_payment.svg'
import doubleSlider from '@assets/icons/double_slider.svg'
import home from '@assets/icons/home.svg'
import { ReactNode } from 'react';
import { ReactSVGHelper } from '@components/helper';

// ----------------------------------------------------------------------

const icon = (name: string): ReactNode => (
  <ReactSVGHelper src={name} />
);

export const navConfig = (accountDesignation?: AccountDesignation): NavParameter[] => {
  const defaultNav = [
    {
      title: 'dashboard',
      path: '/',
      icon: icon(home),
    },
  ]
  switch (accountDesignation) {
    case AccountDesignation.SuperAdmin:
    case AccountDesignation.User:
    case AccountDesignation.Admin:
      return [
        ...defaultNav,
        {
          title: 'admin',
          path: '/admin',
          icon: icon(adminAccount),
        },
        {
          title: 'payments',
          path: '/payments',
          icon: icon(cardPayment),
        },
        {
          title: 'settings',
          path: '/settings',
          icon: icon(doubleSlider),
        },
      ];
  }
  return defaultNav
}
