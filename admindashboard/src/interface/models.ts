import type { HeadLabelParameters } from "./table";

// If the model would be displaced on a table please define the table label parameters

export interface LaboratoryModel {
  branchId: string;
  id: number;
  state: string;
  city: string;
  streetName: string;
  addressNo: number;
  dateCreated: Date
}

export const LaboratoryTableLabel: HeadLabelParameters[] = [
  {id: 'branchId', label: 'Branch ID'},
  {id: 'state'},
  {id: 'city'},
  {id: 'streetName', label: 'Street Name'},
  {id: 'addressNo', label: 'Address Number'},
  {id: 'dateCreated', label: 'Date Created'}
]

export enum AccountDesignation {
  User,
  Admin,
  SuperAdmin,
}

export interface UserModel {
  id: number
  name: string;
  designation: AccountDesignation;
}

export const UserTableLabel: HeadLabelParameters[] = [
  {id: 'name'},
  {id: 'designation'}
]

export enum AllModelsEnum {
  Laboratory = 'Laboratory',
  User = 'User',
}

export type AllModels = UserModel | LaboratoryModel