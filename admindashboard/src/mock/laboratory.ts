import { faker } from '@faker-js/faker';
import type { LaboratoryModel } from "@interface";


export const mockLaboratory: LaboratoryModel[] = [
  {
    id: 1,
    branchId: "LMS001",
    city: "Port Harcourt",
    state: "Rivers",
    streetName: "John Wobo",
    addressNo: 50,
    dateCreated: faker.date.past(),
  },
  {
    id: 2,
    branchId: "LMS002",
    city: "Port Harcourt",
    state: "Rivers",
    streetName: "John Wobo",
    addressNo: 50,
    dateCreated: faker.date.past(),
  },
]