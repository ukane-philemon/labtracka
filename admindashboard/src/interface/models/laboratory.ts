import type { HeadLabelParameters } from "../table";

export interface LaboratoryModel {
  addressNo: number;
  branchId: string;
  city: string;
  dateCreated: Date;
  id: number;
  pendingOrders: number;
  state: string;
  streetName: string;
  totalRevenue: number;
  totalTestOrders: number;
  totalUsers: number;
}

export const LaboratoryTableLabel: HeadLabelParameters[] = [
  { id: 'branchId', label: 'Branch ID', hide: false, edit: false },
  { id: "id", label: "Laboratory ID", hide: true, edit: false },
  { id: 'state', hide: false, edit: true },
  { id: 'city', hide: false, edit: true },
  { id: 'streetName', label: 'Street Name', hide: false, edit: true },
  { id: 'addressNo', label: 'Address Number', hide: false, edit: true },
  { id: 'dateCreated', label: 'Date Created', hide: false, edit: false },
  { id: "totalTestOrders", label: "Total Test Orders", hide: true, edit: false },
  { id: "totalRevenue", label: "Total Revenue", hide: true, edit: false },
  { id: "pendingOrders", label: "Pending Orders", hide: true, edit: false },
  { id: "totalUsers", label: "Total Users", hide: true, edit: false },
]