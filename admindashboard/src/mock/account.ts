import { faker } from '@faker-js/faker';
import accountNotification from '@assets/icons/account_notification.svg';
import broadcastNotification from '@assets/icons/broadcast_notification.svg';
import bugNotification from '@assets/icons/bug_notification.svg';
import {fToNow} from "@components/utils";

// ----------------------------------------------------------------------

export const account = {
  displayName: 'Peace Ewor',
  email: 'admin.lab1@gmail.com',
  photoURL: '/images/avatar.png',
  notifications: [
    {
      key: 1,
      icon: bugNotification,
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es",
      time: fToNow(faker.date.past())
    },
    {
      key: 2,
      icon: accountNotification,
      content: "New user registered",
      time: fToNow(faker.date.past())
    },
    {
      key: 3,
      icon: accountNotification,
      content: "New user registered",
      time: fToNow(faker.date.past())
    },
    {
      key: 4,
      icon: bugNotification,
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es",
      time: fToNow(faker.date.past())
    },
    {
      key: 5,
      icon: broadcastNotification,
      content: 'A super admin deleted a lab test',
      time: fToNow(faker.date.past())
    }
  ]
};
