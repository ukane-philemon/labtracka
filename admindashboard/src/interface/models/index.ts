import type { LaboratoryModel } from "./laboratory";
import type { UserModel } from "./user";

export enum AllModelsEnum {
  Laboratory = "Laboratory",
  User = "User",
}

export type AllModels = UserModel | LaboratoryModel;
