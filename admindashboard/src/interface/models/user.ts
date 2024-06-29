import type { HeadLabelParameters } from "../table";
import type { AccountDesignation } from "./account";

export interface UserModel {
  id: number
  name: string;
  designation: AccountDesignation;
}

export const UserTableLabel: HeadLabelParameters[] = [
  {id: 'name', hide: false, edit: false},
  {id: 'designation', hide: false, edit: false}
]
