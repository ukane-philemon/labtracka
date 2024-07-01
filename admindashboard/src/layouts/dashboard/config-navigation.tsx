import type { ReactNode } from "react";
import { AccountDesignation } from "@interface";
import type { NavParameter } from "@interface";
import adminAccount from "@assets/icons/admin_account.svg";
import doubleSlider from "@assets/icons/double_slider.svg";
import home from "@assets/icons/home.svg";
import laboratory from "@assets/icons/laboratory.svg";
import { SvgColor } from "@components/utils";

// ----------------------------------------------------------------------

const icon = (src: string): ReactNode => (
  <SvgColor src={src} sx={{ width: 1, height: 1 }} />
);

export const navConfig = (
  accountDesignation?: AccountDesignation,
): NavParameter[] => {
  const defaultNav = [
    {
      title: "dashboard",
      path: "/",
      icon: icon(home),
    },
  ];
  switch (accountDesignation) {
    case AccountDesignation.SuperAdmin:
    case AccountDesignation.User:
    case AccountDesignation.Admin:
      return [
        ...defaultNav,
        {
          title: "laboratory",
          path: "/laboratory",
          icon: icon(laboratory),
        },
        {
          title: "admin",
          path: "/admin",
          icon: icon(adminAccount),
        },
        {
          title: "settings",
          path: "/settings",
          icon: icon(doubleSlider),
        },
      ];
    case undefined: {
      throw new Error("Not implemented yet: undefined case");
    }
  }
  return defaultNav;
};